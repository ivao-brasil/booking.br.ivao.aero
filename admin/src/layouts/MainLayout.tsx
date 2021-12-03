import { FunctionComponent } from "react";
import { Header } from "../components/Header";

export const MainLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
