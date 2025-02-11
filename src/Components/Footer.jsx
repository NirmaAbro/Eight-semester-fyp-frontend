import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { IoFastFood } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Footer = () => {
  // Define URLs for each social media platform
  const facebookUrl = "https://www.facebook.com/profile.php?id=100075848754894";
  const instagramUrl = "https://www.instagram.com/nirma_abro143/?hl=en";
  const linkedinUrl = "https://www.linkedin.com/in/nirma-abro-85a885230/";
  const twitterUrl = "https://www.twitter.com/yourprofile";

  return (
    <footer className="bg-footer-bg text-footer-text py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between">
          {/* Connect With Us */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <div className="flex items-center mb-4">
              <IoFastFood className="text-5xl text-primary mr-2" />
              <span className="text-2xl font-bold">Smart Plate</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-footer-text hover:text-primary transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-footer-text hover:text-primary transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-footer-text hover:text-primary transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-footer-text hover:text-primary transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Personalized Diet Plan Recommendations
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Nutrition Plans
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Health Goals Tracking
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
               Diet Plane Customization
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-xl font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  className="hover:text-primary transition-colors duration-300"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/getstarted"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Get Started
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/feedback"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Feedback
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center hover:text-primary transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-3 text-xl text-primary"
                />
                <a href="mailto:nirmaabro143@gmail.com" className="hover:underline">
                  nirmaabro143@gmail.com
                </a>
              </li>
              <li className="flex items-center hover:text-primary transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-3 text-xl text-primary"
                />
                <a href="tel:+1234567890" className="hover:underline">
                  +1234567890
                </a>
              </li>
              <li className="flex items-center hover:text-primary transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-3 text-xl text-primary"
                />
                <span>Hyderabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 Nirma Abro. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <NavLink
              to="/privacy-policy"
              className="text-sm hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms-of-service"
              className="text-sm hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </NavLink>
            <NavLink
              to="/sitemap"
              className="text-sm hover:text-primary transition-colors duration-300"
            >
              Sitemap
            </NavLink>
          </div>
        </div>
      </div>

      {/* Background Shape or Pattern (Optional) */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Example: A subtle wave or pattern can be added here */}
      </div>
    </footer>
  );
};

export default Footer;
