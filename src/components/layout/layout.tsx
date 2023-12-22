import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
