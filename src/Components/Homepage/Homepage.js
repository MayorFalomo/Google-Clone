import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../Footer/Footer";
import Index from "../Index";
import Mainbody from "../Mainbody/Mainbody";
import Navbar from "../Navbar/Navbar";

const Homepage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("name")) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Mainbody />
      <Index />
      <Footer />
    </div>
  );
};

export default Homepage;
