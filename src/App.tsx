import Header from "./components/core/header";
import Menu from "./components/core/menu";
import Hero from "./components/core/hero";

export default function App() {
  return (
    <>
      <Header />̥
      <div className="flex gap-x-1">
        <Menu />
        <Hero />
      </div>
    </>
  )
}