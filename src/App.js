import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navBar/NavBar";
import Who from "./who/Who";
import Service from "./service/Service";
import Vision from "./vision/Vision";
import Commerce from "./Commercial/Commerce";
import Blog from "./Blogs/Blog";
import Testimo from "./testimo/Testimo";
import About from "./about/About";
import ScrollTop from "./scrollTop/ScrollTop";

const App = () => {
  return (
    <>
      <NavBar />
      <Who />
      <Service />
      <Vision />
      <Commerce />
      <Blog />
      <Testimo />
      <About />
      <ScrollTop />
    </>
  );
};

export default App;
