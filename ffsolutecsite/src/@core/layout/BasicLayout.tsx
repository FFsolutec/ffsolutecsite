// import { Footer } from "../components/Footer";
// import Menu from "../components/Menu";
import { BlankLayoutProps } from "./types";

const BasicLayout = ({ children }: BlankLayoutProps) => {
  return (
    <div className="layout d-flex a-c f-c j-sb">
      {/* <Menu /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default BasicLayout;
