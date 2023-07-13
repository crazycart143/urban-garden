import React from "react";
import CustomButton from "./CustomButton";

const GiftCard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-center bg-cover w-full h-[300px] md:h-[400px] bg-gift-bg text-white gap-y-4 my-10">
      <p className="text-[20px]">GIFT CARD</p>
      <h1 className="text-[40px] md:text-[60px]">Give the Gift of Greenery</h1>
      <CustomButton
        title="Purchase A Gift Card"
        containerStyles="py-2 px-4 bg-white text-black"
      />
    </div>
  );
};

export default GiftCard;
