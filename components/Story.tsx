import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const Story = () => {
  return (
    <div className="relative flex flex-col w-full md:flex-row max-width md:gap-x-6 lg:gap-x-0 py-14">
      <Image
        src="/plants-store-story-section-img.webp"
        width={800}
        height={600}
        alt="story-image"
        className="object-cover md:object-left lg:object-top md:w-[400px] lg:w-[800px] md:h-[600px] lg:h-[500px]"
      />
      <div className="py-10 w-full sm:w-[90vw] left-0 right-0 mx-auto  md:w-[500px] flex flex-col justify-center items-start px-6 absolute md:static bottom-5 sm:bottom-10 bg-white">
        <p>OUR STORY</p>
        <h1 className="text-[30px]">Bringing Nature to Urban Dwellers</h1>
        <div className="flex flex-col mt-4 text-sm gap-y-4 sm:text-base">
          <p>
            Our story began with a simple vision: to create green spaces that
            transform urban environments into vibrant, sustainable oases. We
            started small, with a few plants in our own apartments, but our love
            for nature quickly grew into something bigger.
          </p>
          <p>
            At Urban Garden, we are passionate about bringing nature to urban
            dwellers. We believe that even in the concrete jungle, everyone
            deserves to experience the beauty and benefits of nature.
          </p>
        </div>
        <CustomButton
          title="Read More"
          containerStyles="bg-[#5C9735] text-white hover:bg-[#4D4F48] py-2 px-6 transition duration-200 ease-in-out mt-6 "
        />
      </div>
    </div>
  );
};

export default Story;
