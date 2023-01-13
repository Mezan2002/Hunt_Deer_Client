import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="bg-gradient-to-l from-[#E8EEFA] to-[#F2F5FC] py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-medium">
          Testimonials From Our Customers
        </h2>
        <p className="mt-4 text-gray-400">
          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
        </p>
      </div>
      <div>
        <aside className="flex justify-center items-center">
          <TestimonialSlider></TestimonialSlider>
        </aside>
      </div>
    </div>
  );
};

export default Testimonial;
