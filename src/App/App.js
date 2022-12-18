import "./App.module.scss";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Pricing from "../Pages/Pricing";
import Blog from "../Pages/Blog";
import BlogDetails from "../Pages/BlogDetails";
import Contact from "../Pages/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blogdetails" element={<BlogDetails />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
