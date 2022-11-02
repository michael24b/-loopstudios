import { Fragment } from "react";
import "./App.css";
import Creations from "./components/Creations/Creations";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Fragment>
      <Hero />
      <Feature />
      <Creations />
      <Footer />
    </Fragment>
  );
}

export default App;
