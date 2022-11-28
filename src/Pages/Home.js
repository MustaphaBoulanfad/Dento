import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import { Fragment } from "react";
import About from "../Components/About/About";
import OurService from "../Components/OurService/OurService";
import Pricing from "../Components/Pricing/Pricing";
import Book from "../Components/Book/Book";
import Ourdentists from "../Components/Ourdentists/Ourdentists";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
      <OurService />
      <Pricing />
      <Book />
      <Ourdentists />
    </Fragment>
  );
};

export default Home;
