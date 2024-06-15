import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-gray-200 p-6">
        <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
        <p className="mb-4">
          Get the latest updates and offers directly in your inbox.
        </p>
        <form className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 flex-grow rounded-l"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r"
          >
            Subscribe
          </button>
        </form>
      </div>

      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto flex justify-between">
          <div>
            <h3 className="text-lg font-bold">Company Name</h3>
            <p>© 2024 Company Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact Us
            </a>
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-400 hover:text-blue-600">
              Facebook
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              Twitter
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
