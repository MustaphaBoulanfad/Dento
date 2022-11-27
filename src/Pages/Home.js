import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import { Fragment } from "react";
import About from "../Components/About/About";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
    </Fragment>
  );
};

export default Home;
