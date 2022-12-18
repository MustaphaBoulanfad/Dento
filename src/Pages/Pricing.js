import Navbar from "../Components/Navbar/Navbar";
import { Fragment } from "react";
import Path from "../Components/Path/Path";
import OurPricing from "../Components/Pricing/Pricing";
import Footer from "../Components/Footer/Footer";
import DenamicHeader from "../Components/DenamicHeader/DenamicHeader";

const Pricing = () => {
  return (
    <Fragment>
      <Navbar />
      <DenamicHeader text={"Our Pricing"} />
      <Path />
      <OurPricing />
      <Footer />
    </Fragment>
  );
};

export default Pricing;
