import React from "react";
import Banner from "../Banner/Banner";
import FeaturedCity from "../FeaturedCity/FeaturedCity";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategories from "../JobCategories/JobCategories";
import MiniAbout from "../MiniAbout/MiniAbout";
import OtherCompanies from "../OtherCompanies/OtherCompanies";
import Testimonial from "../Testimonial/Testimonial";
import UploadCV from "../UploadCV/UploadCV";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategories></JobCategories>
      <FeaturedJobs></FeaturedJobs>
      <FeaturedCity></FeaturedCity>
      <Testimonial></Testimonial>
      <OtherCompanies></OtherCompanies>
      <MiniAbout></MiniAbout>
      <UploadCV></UploadCV>
    </div>
  );
};

export default Home;
