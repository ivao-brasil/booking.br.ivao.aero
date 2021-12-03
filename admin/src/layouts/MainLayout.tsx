import { FunctionComponent } from "react";
import { Header } from "../components/Header";
import style from "./layout.module.css";

export const MainLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <section className={style.container}>{children}</section>
    </>
  );
};
