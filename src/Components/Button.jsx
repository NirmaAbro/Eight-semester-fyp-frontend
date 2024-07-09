import React from "react";

const Button = (props) => {
  function getstarted() {
    console.log("button clicked");
  }

  return (
    <button
      onClick={getstarted}
      className="bg-green-500 hover:bg-green-700 text-white font-bold md:py-2 md:px-4 p-2 rounded-full mt-8 lg:px-5 lg:py-3 cursor-pointer"
    >
      {props.getstart}
    </button>
  );
};

export default Button;
