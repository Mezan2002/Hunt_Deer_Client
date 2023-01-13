import React from "react";

const JobCategories = () => {
  return (
    <div>
      <div className="my-20">
        <div className="text-center">
          <h2 className="text-3xl font-medium">Popular Job Categories</h2>
          <p>2023 jobs live - 50 added today.</p>
        </div>
        <div className="grid grid-cols-3 gap-5 md:px-40 mt-20">
          <div className="flex items-center py-4 w-10/12 mx-auto border border-gray-200 rounded-xl">
            <img
              src="https://i.ibb.co/Zx8gT8h/coding-1.png"
              alt=""
              className="h-16 w-16 ml-6 bg-slate-200 p-2 rounded-xl"
            />
            <div className="ml-5">
              <h5 className="text-xl font-medium">Development</h5>
              <p>(180 Open Position)</p>
            </div>
          </div>
          <div className="flex items-center py-4 w-10/12 mx-auto border border-gray-200 rounded-xl">
            <img
              src="https://i.ibb.co/dLy42X7/web-design.png"
              alt=""
              className="h-16 w-16 ml-6 bg-slate-200 p-2 rounded-xl"
            />
            <div className="ml-5">
              <h5 className="text-xl font-medium">Design</h5>
              <p>(104 Open Position)</p>
            </div>
          </div>
          <div className="flex items-center py-4 w-10/12 mx-auto border border-gray-200 rounded-xl">
            <img
              src="
              https://i.ibb.co/qNVFRN8/money.png"
              alt=""
              className="h-16 w-16 ml-6 bg-slate-200 p-2 rounded-xl"
            />
            <div className="ml-5">
              <h5 className="text-xl font-medium">Account/Finance</h5>
              <p>(49 Open Position)</p>
            </div>
          </div>
          <div className="flex items-center py-4 w-10/12 mx-auto border border-gray-200 rounded-xl">
            <img
              src="https://i.ibb.co/H7HY9f5/digital-marketing.png"
              alt=""
              className="h-16 w-16 ml-6 bg-slate-200 p-2 rounded-xl"
            />
            <div className="ml-5">
              <h5 className="text-xl font-medium">Marketing</h5>
              <p>(32 Open Position)</p>
            </div>
          </div>
          <div className="flex items-center py-4 w-10/12 mx-auto border border-gray-200 rounded-xl">
            <img
              src="https://i.ibb.co/jbcyTpN/human-resources.png"
              alt=""
              className="h-16 w-16 ml-6 bg-slate-200 p-2 rounded-xl"
            />
            <div className="ml-5">
              <h5 className="text-xl font-medium">Human Resource</h5>
              <p>(56 Open Position)</p>
            </div>
          </div>
          <div className="flex items-center py-4 w-10/12 mx-auto border border-gray-200 rounded-xl">
            <img
              src="https://i.ibb.co/DwyTKgF/analytics.png"
              alt=""
              className="h-16 w-16 ml-6 bg-slate-200 p-2 rounded-xl"
            />
            <div className="ml-5">
              <h5 className="text-xl font-medium">Project Management</h5>
              <p>(41 Open Position)</p>
            </div>
          </div>
          <div className="flex items-center py-4 w-10/12 mx-auto border border-gray-200 rounded-xl">
            <img
              src="https://i.ibb.co/r4gZhV6/support-1.png"
              alt=""
              className="h-16 w-16 ml-6 bg-slate-200 p-2 rounded-xl"
            />
            <div className="ml-5">
              <h5 className="text-xl font-medium">Customer Service</h5>
              <p>(10 Open Position)</p>
            </div>
          </div>
          <div className="flex items-center py-4 w-10/12 mx-auto border border-gray-200 rounded-xl">
            <img
              src="https://i.ibb.co/YcjV78f/first-aid-kit-1.png"
              alt=""
              className="h-16 w-16 ml-6 bg-slate-200 p-2 rounded-xl"
            />
            <div className="ml-5">
              <h5 className="text-xl font-medium">Heath Care</h5>
              <p>(17 Open Position)</p>
            </div>
          </div>
          <div className="flex items-center py-4 w-10/12 mx-auto border border-gray-200 rounded-xl">
            <img
              src="https://i.ibb.co/ZXbC6fB/car-1.png"
              alt=""
              className="h-16 w-16 ml-6 bg-slate-200 p-2 rounded-xl"
            />
            <div className="ml-5">
              <h5 className="text-xl font-medium">Automotive Jobs</h5>
              <p>(1 Open Position)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategories;
