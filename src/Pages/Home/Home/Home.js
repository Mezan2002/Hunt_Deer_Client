import React from "react";
import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategories from "../JobCategories/JobCategories";
import OtherCompanies from "../OtherCompanies/OtherCompanies";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategories></JobCategories>
      <FeaturedJobs></FeaturedJobs>
      <Testimonial></Testimonial>
      <OtherCompanies></OtherCompanies>
    </div>
  );
};

export default Home;
