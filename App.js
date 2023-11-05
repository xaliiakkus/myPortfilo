"use client";
import Services from "./Components/About";
import {
  Navbar,
  Welcome,
  Footer,
  Transctions
} from "./Components/index";

function App() {
  return (
    <div className="w-full ">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>

      <Services />
      <Transctions />
      <Footer />
    </div>
  );
}

export default App;
