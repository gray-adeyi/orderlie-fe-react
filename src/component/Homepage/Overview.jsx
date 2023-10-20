import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import board from "../../assets/image 3.png";
import check from "../../assets/image 4.png";
import student from "../../assets/image 5.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Overview = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" py-20 md:py-40">
      <div>
        <h2 className="text-2xl font-bold">Hello Class Governor</h2>
        <p className="text-xl font-light">
          Here's an overview, click on the card to view details
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-14 items-center justify-between py-10">
        {/* Card1 */}
        <div className=" w-full flex flex-col items-center justify-center rounded-3xl border py-7 px-3 hover:border-bgColor hover:scale-110 cursor-pointer duration-500 hover:bg-hover hover:relative">
          <div>
            <div className="absolute rounded-full h-7 w-7 right-4 top-4 bg-bgColor"></div>
            <div className="flex gap-8 items-center justify-center">
              <div className="grid py-5 gap-4">
                <p className=" text-3xl font-bold">10</p>
                <p className=" text-xl font-light">Registered Classes</p>
              </div>
              <img src={board} alt="" className=" h-12 w-12" />
            </div>
            <Link
              to="/newclass"
              className="px-5 py-2 text-xl font-light text-bgColor rounded-xl border-2 border-bgColor"
            >
              Create New Class
            </Link>
          </div>
        </div>
        {/* Card 2*/}
        <div className=" w-full flex flex-col items-center justify-center rounded-3xl border py-7 px-3 hover:border-bgColor hover:scale-110 cursor-pointer duration-500 hover:bg-hover hover:relative">
          <div>
            <div className="absolute rounded-full h-7 w-7 right-4 top-4 bg-bgColor"></div>
            <div className="flex gap-8 items-center justify-center">
              <div className="grid py-5 gap-5">
                <p className=" text-3xl font-bold">10</p>
                <p className=" text-xl font-light">Uploaded bio data</p>
              </div>
              <img src={check} alt="" className=" h-12 w-12" />
            </div>
            <Link
              to="/your-upload-page"
              className="px-5 py-2 text-xl font-light text-bgColor rounded-xl border-2 border-bgColor"
            >
              Upload bio data
            </Link>
          </div>
        </div>
        {/* Card 3 */}
        <div className=" w-full flex flex-col items-center justify-center rounded-3xl border py-7 px-3 hover:border-bgColor hover:scale-110 cursor-pointer duration-500 hover:bg-hover hover:relative">
          <div>
            <div className="absolute rounded-full h-7 w-7 right-4 top-4 bg-bgColor"></div>
            <div className="flex gap-8 items-center justify-center">
              <div className="grid py-5 gap-5">
                <p className=" text-3xl font-bold">200</p>
                <p className=" text-xl font-light">Total Number of Student</p>
              </div>
              <img src={student} alt="" className=" h-12 w-12" />
            </div>
			<Link
              to="/classlist"
              className="px-5 py-2 text-xl font-light text-bgColor rounded-xl border-2 border-bgColor"
            >
              View Class List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
