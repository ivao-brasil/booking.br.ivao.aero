import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoutes = () => {
  const { user } = useContext(AuthContext);

  return <>{JSON.stringify(user)}</>;
};
