import Navbar from "../Components/Navbar/Navbar";
import { Fragment } from "react";
import OurPricing from "../Components/Pricing/Pricing";
import Footer from "../Components/Footer/Footer";
import DenamicHeader from "../Components/DenamicHeader/DenamicHeader";

const Pricing = () => {
  return (
    <Fragment>
      <Navbar />
      <DenamicHeader text={"Our Pricing"} />
      <OurPricing />
      <Footer />
    </Fragment>
  );
};

export default Pricing;
