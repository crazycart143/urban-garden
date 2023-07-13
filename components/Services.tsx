import React from "react";
import { AiFillLock } from "react-icons/ai";
import { LuPackage2 } from "react-icons/lu";
import { FaHandHoldingHeart } from "react-icons/fa";
const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center px-10 py-10 sm:flex-row gap-x-6 ">
      <div className="flex flex-col items-center justify-start lg:flex-row ">
        <div className="rounded-full bg-[#5C9735] w-10 lg:w-[40px] h-10 flex justify-center items-center sm:text-[24px] ">
          <AiFillLock color="white" />
        </div>
        <div className="flex flex-col items-center justify-center ml-4 lg:items-start lg:justify-start lg:w-[200px]">
          <h1 className="mt-4 text-[20px]">Secure Payment</h1>
          <p className="text-sm text-center lg:text-start">
            Shop with confidence knowing that your payment is secure and
            protected.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start lg:flex-row">
        <div className="rounded-full bg-[#5C9735] w-10 lg:w-[40px] h-10 flex justify-center items-center sm:text-[24px] mt-6 sm:mt-0">
          <LuPackage2 color="white" />
        </div>
        <div className="flex flex-col items-center justify-center ml-4 lg:items-start lg:w-[200px]">
          <h1 className="mt-4 text-[20px]">Deliver With Care</h1>
          <p className="text-sm text-center lg:text-start">
            Your orders are handled with utmost care and delivered to your
            doorstep promptly.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start lg:flex-row">
        <div className="rounded-full bg-[#5C9735] w-10 lg:w-[40px] h-10 flex justify-center items-center sm:text-[24px] mt-6 sm:mt-0">
          <FaHandHoldingHeart color="white" />
        </div>
        <div className="flex flex-col items-center justify-center ml-4 lg:items-start lg:w-[200px]">
          <h1 className="mt-4 text-[20px]">Excellent Service</h1>
          <p className="text-sm text-center lg:text-start">
            We are committed to providing you with exceptional customer service
            every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
