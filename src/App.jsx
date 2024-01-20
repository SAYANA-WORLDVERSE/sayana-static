import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./COMPONENTS/Navbar";
import Home from "./PAGES/Home";
import Footer from "./COMPONENTS/Footer";
import Blogs from "./PAGES/Blogs";
import Contact from "./PAGES/Contact";
import AboutUs from "./PAGES/AbousUs";
import Career from "./PAGES/Career";
import Portfolio from "./PAGES/Portfolio";
import AOS from "aos";
import "aos/dist/aos.css";
import WebDesign from "./PAGES/WebDesign";
import AppDevelopment from "./PAGES/AppDevelopment";
import Productdevelopment from "./PAGES/ProductDevelopment";
import DigitalMarketing from "./PAGES/DigitalMarketing";
import GraphicsDesign from "./PAGES/GraphicsDesign";
import { useTheme } from "./COMPONENTS/Context";
import "./index.css";
import ErrorPage from "./COMPONENTS/ErrorPage";
import BlogDetails from "./PAGES/BlogDetails";
import PopModal from "./COMPONENTS/PopModal";

const App = () => {
  const { isDark } = useTheme();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    AOS.init();

    const handleLoad = () => {
      setOpenModal(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <Fragment>
      <div className={isDark ? "dark-theme" : "light-theme"}>
        <Router>
          {openModal && <PopModal />}

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/career" element={<Career />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/webdesign" element={<WebDesign />} />
            <Route
              path="/applicationdevelopment"
              element={<AppDevelopment />}
            />
            <Route
              path="/productdevelopment"
              element={<Productdevelopment />}
            />
            <Route path="/Digitalmarketing" element={<DigitalMarketing />} />
            <Route path="/graphicsdesign" element={<GraphicsDesign />} />
            <Route path="/blogdetails/:id" element={<BlogDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
