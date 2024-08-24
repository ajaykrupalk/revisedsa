import Footer from "../components/core/Footer";
import Header from "../components/core/Header";
import Hero from "../components/core/Hero";
import Menu from "../components/core/Menu";

export default function MainLayout() {
  return (
    <>
      <Header />
      <div className="flex gap-x-1 h-full">
        <Menu />
        <Hero />
      </div>
      <Footer/>
    </>
  )
}
