import Navbar from "../Components/Navbar/Navbar";
import { Fragment } from "react";
import Path from "../Components/Path/Path";
import Footer from "../Components/Footer/Footer";
import DenamicHeader from "../Components/DenamicHeader/DenamicHeader";
import BlogContainer from "../Components/Blog/Blog";

const Blog = () => {
  return (
    <Fragment>
      <Navbar />
      <DenamicHeader text={"Blog"} />
      <Path />
      <BlogContainer />
      <Footer />
    </Fragment>
  );
};

export default Blog;
