import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import StudentReviews from "../components/StudentReviews";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Hero />
      </div>
      <StudentReviews></StudentReviews>
      <Features></Features>
      <Pricing></Pricing>
    </>
  );
};

export default Home;
