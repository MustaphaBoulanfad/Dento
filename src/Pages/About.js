import Navbar from "../Components/Navbar/Navbar";
import { Fragment } from "react";
import AboutContainer from "../Components/About/About";
import Ourdentists from "../Components/Ourdentists/Ourdentists";
import Patients from "../Components/Patients/Patients";
import Footer from "../Components/Footer/Footer";
import DenamicHeader from "../Components/DenamicHeader/DenamicHeader";
import Path from "../Components/Path/Path";

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <DenamicHeader text={"About Us"} />
      <Path />
      <AboutContainer />
      <Patients />
      <Ourdentists />
      <Footer />
    </Fragment>
  );
};

export default About;
