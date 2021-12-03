import { createContext, FunctionComponent } from "react";
import { User } from "../types/User";

interface IAuthContext {
  signed: boolean;
  user: User | null;
  token: string | null;
  signIn: (ivaoToken: string) => Promise<User>;
  signOut: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  signIn: (ivaoToken: string) => Promise.reject(),
  signOut: () => {},
  signed: false,
  token: "",
  user: null,
});

export const AuthProvider: FunctionComponent = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        signIn: (ivaoToken: string) => Promise.reject(),
        signOut: () => {},
        signed: false,
        token: "",
        user: null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
