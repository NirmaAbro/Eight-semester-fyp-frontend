import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.jpeg";

const Footer = () => {
  // Define URLs for each social media platform
  const facebookUrl = "https://www.facebook.com/profile.php?id=100075848754894";
  const instagramUrl = "https://www.instagram.com/nirma_abro143/?hl=en";
  const linkedinUrl = "https://www.linkedin.com/in/nirma-abro-85a885230/";
  const twitterUrl = "https://www.twitter.com/yourprofile";

  return (
    <footer className="bg-green-100 text-black py-5 pb-0 pt-5 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <img
              src={logo}
              alt="Logo"
              width={150}
              height={50}
              className="mix-blend-multiply  rounded-full"
            />
            <h2 className="text-lg font-bold mt-4">Connect With Us</h2>
            <div className="flex mt-2 space-x-4">
              <a href={instagramUrl} target="_blank" aria-label="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-green-600 text-2xl"
                />
              </a>
              <a href={facebookUrl} aria-label="Facebook" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-green-600 text-2xl"
                />
              </a>
              <a href={linkedinUrl} aria-label="LinkedIn" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-green-600 text-2xl"
                />
              </a>
              <a href={twitterUrl} aria-label="Twitter" target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-green-600 text-2xl"
                />
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-lg font-bold">Services</h2>
            <ul className="mt-4 space-y-2">
              <li>Personalized Recipe Recommendations</li>
              <li>Nutrition Plans</li>
              <li>Health Goals Tracking</li>
              <li>Recipe Customization</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-lg font-bold">Pages</h2>
            <ul className="mt-4 space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Recipes</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-lg font-bold">Contact Information</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-green-600  text-xl"
                />
                nirmaabro143@gmail.com
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2 text-green-600  text-xl"
                />
                +1234567890
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-2 text-green-600 text-xl"
                />
                Hyderabad,Pakistan
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-white text-sm bg-green-600 w-full py-5">
        Copyright © 2022 Your Website. All rights reserved. Powered by Minosofts
        Cooperation
      </div>
    </footer>
  );
};

export default Footer;
