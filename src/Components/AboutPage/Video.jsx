import React from "react";
import Image from "next/image";
import bg from "../backimage.jpg";

const Video = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-blue-900 bg-opacity-100">
        <Image
          src={bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full z-0 opacity-50"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-5xl">
            Nurturing The Best To Give An Outstanding Result
          </h2>
          <p className="max-w-7xl mx-auto mb-8 text-3xl font-medium">
            At the heart of our commitment lies a dedication to nurture
            excellence, cultivating the best in every individual to yield
            outstanding results. Our tailored approach fosters growth,
            resilience, and a pathway to success, ensuring unparalleled
            achievements in every endeavor.
          </p>
        </div>
      </div>
    </>
  );
};

export default Video;
