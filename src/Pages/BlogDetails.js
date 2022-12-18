import Navbar from "../Components/Navbar/Navbar";
import Path from "../Components/Path/Path";
import { Fragment } from "react";
import Footer from "../Components/Footer/Footer";
import DenamicHeader from "../Components/DenamicHeader/DenamicHeader";
import BlogDetailsContainer from "../Components/BlogDetails/BlogDetails";

const BlogDetails = () => {
  return (
    <Fragment>
      <Navbar />
      <DenamicHeader text={"Blog Details"} />
      <Path />
      <BlogDetailsContainer />
      <Footer />
    </Fragment>
  );
};

export default BlogDetails;
