import Footer from "../components/core/Footer";
import Header from "../components/core/Header";
import Menu from "../components/core/Menu";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <div className="flex gap-x-1 h-full">
        <Menu />
        <Outlet />
      </div>
      <Footer/>
    </>
  )
}
