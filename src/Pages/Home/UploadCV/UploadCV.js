import React from "react";

const UploadCV = () => {
  return (
    <div>
      <div
        className="mt-10 py-20 md:px-80 flex items-center justify-between 
      bg-gradient-to-l from-[#E8EEFA] to-[#F2F5FC]"
      >
        <div>
          <h2 className="text-3xl font-medium">Let employers find you</h2>
          <p className="mt-4 text-gray-400">
            Advertise your jobs to millions of monthly users and search 15.8
            million CVs in our database.
          </p>
        </div>
        <div>
          <button className="btn btn-primary text-white">
            Upload Your Resume/CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadCV;
