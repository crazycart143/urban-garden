import React from "react";
import { BsQuote } from "react-icons/bs";
import { feedBack } from "@/constants";
import Image from "next/image";

const Feedback = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-10 py-10 md:px-20 max-width">
      <h1 className="text-[26px] md:text-[30px] font-medium py-4 border-b-2 border-[#5C9735]">
        What Our Customers Say
      </h1>
      <div className="flex flex-col sm:flex-row sm:gap-x-4">
        {feedBack.map((feedback, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start w-full gap-y-4"
          >
            <BsQuote color="#5C9735" className="opacity-50 text-[26px] mt-6" />
            <p className="text-[16px] text-center font-medium">
              {feedback.feedback}
            </p>
            <Image
              src={feedback.image}
              width={40}
              height={40}
              alt={feedback.name}
              className="object-contain rounded-full"
            />
            <p>{feedback.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
