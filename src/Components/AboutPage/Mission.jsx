import React from "react";
import mission from "../mission.jpg";
import vision from "../vision.jpg";
import Image from "next/image";

const Mission = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-blue-500">Mission</span>
            </h2>
            <p className="mb-4 max-w-[100]">
              IRIS Education and Training Services, have a mission is to deliver
              innovative and accessible educational, training and Research
              solutions that transform lives and organizations. Through our
              extensive reach, door-to-door training, diverse range of services,
              and commitment to excellence, we aim to equip individuals with the
              technical skills they need to succeed while providing valuable
              research, analysis, and market assessments to organizations. We
              strive to be a trusted partner in fostering sustainable
              development and socio-economic growth in Sindh and Pakistan.
            </p>
            <div className="border-4 border-blue-500 rounded-lg overflow-hidden">
              <Image src={mission} alt="Mission" layout="responsive" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border-4 border-blue-500 rounded-lg overflow-hidden mb-4">
              <Image src={vision} alt="Vision" />
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-blue-500">Vision</span>
            </h2>
            <p className="max-w-96">
              To be the leading provider of comprehensive and impactful
              educational, training and Research services in Sindh and Pakistan,
              empowering individuals, and organizations to achieve their full
              potential through technical skill development, research, and
              market insights.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
