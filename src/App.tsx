import Header from "./components/core/header";
import Menu from "./components/core/menu";
import Hero from "./components/core/hero";
import Footer from "./components/core/footer";

export default function App() {
  return (
    <>
      <Header />̥
      <div className="flex gap-x-1 h-full">
        <Menu />
        <Hero />
      </div>
      <Footer />
    </>
  )
}