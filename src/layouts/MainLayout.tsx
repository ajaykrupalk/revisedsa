import Footer from "../components/core/Footer";
import Header from "../components/core/Header";
import Menu from "../components/core/Menu";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="max-w-full">
        <Header />
        <div className="flex gap-x-1 h-screen">
          <div className="hidden sm:block">
            <Menu />
          </div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}
