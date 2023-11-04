import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./COMPONENTS/Navbar";
import Home from "./PAGES/Home";
import Footer from "./COMPONENTS/Footer";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </Router>
    </Fragment>
  );
};

export default App;
