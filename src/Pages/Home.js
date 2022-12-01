import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import { Fragment } from "react";
import About from "../Components/About/About";
import OurService from "../Components/OurService/OurService";
import Pricing from "../Components/Pricing/Pricing";
import Book from "../Components/Book/Book";
import Ourdentists from "../Components/Ourdentists/Ourdentists";
import Patients from "../Components/Patients/Patients";
import LatestNews from "../Components/LatestNews/LatestNews";

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
      <Patients />
      <LatestNews />
    </Fragment>
  );
};

export default Home;
