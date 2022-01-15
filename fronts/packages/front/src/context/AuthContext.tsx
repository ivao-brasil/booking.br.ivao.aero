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

interface IAuthContext {
  signed: boolean;
  token: string;
  signIn: (ivaoToken: string) => Promise<void>;
  signOut: () => void;
  refreshToken: () => void;
}

interface TokenData {
  iat: number;
  exp: number;
}

export const AuthContext = createContext<IAuthContext>({
  signed: false,
  token: "",
  signIn: (_: string) => Promise.reject(),
  signOut: () => { },
  refreshToken: () => { }
});

export const AuthProvider: FunctionComponent = ({ children }) => {
  const { apiClient: authClient } = useContext(IocContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState<string>(localStorage.getItem("token") || "");

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
