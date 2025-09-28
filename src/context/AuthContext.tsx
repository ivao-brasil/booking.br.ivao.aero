import {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import jwtDecode from "jwt-decode";
import { IocContext } from "./IocContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Env } from "env";

interface IAuthContext {
  signed: boolean;
  token: string;
  signIn: (ivaoToken: string) => Promise<void>;
  signOut: () => void;
  refreshToken: () => void;
  openIdInfo?: {
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userInfoEndpoint: string;
    jwksUri: string;
  }
}

interface TokenData {
  iat: number;
  exp: number;
}

export const AuthContext = createContext<IAuthContext>({
  signed: false,
  token: "",
  openIdInfo: undefined,
  signIn: (_: string) => Promise.reject(),
  signOut: () => { },
  refreshToken: () => { },
});

export const AuthProvider: FunctionComponent = ({ children }) => {
  const { apiClient: authClient } = useContext(IocContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState<string>(localStorage.getItem("token") || "");
  const [openIdInfo, setOpenIdInfo] = useState<IAuthContext["openIdInfo"]>();

  const signIn = useCallback(async (ivaoToken: string) => {
    const { jwt } = await authClient.auth(ivaoToken);
    setToken(jwt);
    localStorage.setItem("token", jwt);
  }, [authClient]);

  const signOut = useCallback(() => {
    localStorage.removeItem("token");
    setToken("");
  }, []);

  const refreshToken = useCallback(() => {
    signOut();
    navigate("/login", { state: { from: location } });
  }, [navigate, signOut, location]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${Env.IVAO_API_SERVER}/.well-known/openid-configuration`);
        const data = await response.json();
        setOpenIdInfo({
          authorizationEndpoint: data.authorization_endpoint,
          tokenEndpoint: data.token_endpoint,
          userInfoEndpoint: data.userinfo_endpoint,
          jwksUri: data.jwks_uri,
        });
      } catch (error) {
        console.error("Error fetching OpenID:", error);
      }
    })();
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    }

    const currentTimestampSec = Math.floor(Date.now() / 1000);
    const { exp } = jwtDecode<TokenData>(token);

    if (currentTimestampSec > exp) {
      refreshToken();
    }

    authClient.token = token;
  }, [authClient, refreshToken, token]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        refreshToken,
        signed: !!token,
        token,
        openIdInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
