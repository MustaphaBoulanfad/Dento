import Navbar from "../Components/Navbar/Navbar";
import { Fragment } from "react";
import Path from "../Components/Path/Path";
import Patients from "../Components/Patients/Patients";
import Footer from "../Components/Footer/Footer";
import DenamicHeader from "../Components/DenamicHeader/DenamicHeader";
import LatestNews from "../Components/LatestNews/LatestNews";
import Services from "../Components/Services/Services";

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <DenamicHeader text={"Service"} />
      <Path />
      <Services />
      <Patients />
      <LatestNews />
      <Footer />
    </Fragment>
  );
};

export default About;
