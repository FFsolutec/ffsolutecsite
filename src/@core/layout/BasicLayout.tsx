import Menu from "../componentes/Menu";
import { BlankLayoutProps } from "./types";

const BasicLayout = ({ children }: BlankLayoutProps) => {
  return <div className="layout d-flex a-c f-c j-s">{children}</div>;
};

export default BasicLayout;
