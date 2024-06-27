import React from "react";
import Image from "next/image";
import pic from "../picture.png";
import { TiTick } from "react-icons/ti";

const Who = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-20 ">
        <div className="w-1/2 mt-20">
          <Image
            className="justify-center items-center m-auto w-1/2 h-1/2"
            src={pic}
            alt=""
          />
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center">
          <div className="w-full mt-28">
            <h1 className=" lg:text-6xl font-sans text-left font-bold mb-4  md:text-5xl text-2xl">
              WHO WE{" "}
              <span className="text-blue-500 justify-start items-start">
                ARE
              </span>
            </h1>
            <h6 className="text-large md:text-2xl lg:text-3xl font-semibold mb-2 leading-none">
              Fostering Growth Through
            </h6>
            <h6 className="lg:text-3xl  font-semibold mb-2 md:text-2xl   text-large">
              Comprehensive Education and Training
            </h6>
            <h6 className="lg:text-3xl font-semibold mb-4 leading-none md:text-2xl text-large">
              Services
            </h6>
          </div>

          <p className=" lg:text-lg mb-2 leading-normal font-sans md:text-lg  ">
            IRIS Education and Training Services is a leading provider of
            comprehensive services to NGOs, institutes, and individuals in
            Pakistan.
          </p>
          <p className="lg:text-lg font-sans leading-normal md:text-lg ">
            With a diverse range of offerings such as IT services, research
            services, training services, technical training services, and
            educational services, IRIS is committed to promoting integrated
            sustainability and facilitating growth in various sectors.
          </p>
          <div className="flex w-full m-4 items-center">
            <TiTick className="bg-green-500 text-white m-2 text-2xl rounded-full " />
            <p className="p-1 font-medium ">
              <span className=" font-extrabold mr-2">2,345</span>
              Success Students{" "}
            </p>
          </div>
          <div className="w-full ">
            <button className="bg-blue-500 text-white   justify-center items-center px-11 py-2 rounded-full">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Who;
