import React from "react";
// Resets
import "./App.css";
//Components
import Navbar from "./Navbar";
import Landing01 from "./Landing01";
import Landing02 from "./Landing02";
import Landing03 from "./Landing03";
import Landing04 from "./Landing04";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing01 />
      <Landing02 />
      <Landing03 />
      <Landing04 />
      <Footer />
    </div>
  );
};

export default App;
