import Navbar from "../Components/Navbar/Navbar";
import Path from "../Components/Path/Path";
import { Fragment } from "react";
import Footer from "../Components/Footer/Footer";
import DenamicHeader from "../Components/DenamicHeader/DenamicHeader";
import Contact from "../Components/Contact/Contact";

const BlogDetails = () => {
  return (
    <Fragment>
      <Navbar />
      <DenamicHeader text={"Contact"} />
      <Path />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default BlogDetails;
