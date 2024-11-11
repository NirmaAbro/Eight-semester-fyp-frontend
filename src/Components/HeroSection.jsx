import { useNavigate } from "react-router-dom";
import bg from "../images/girl2.png";
import img from "../images/cover.jpg";


function HeroSection() {
  
  const navigate = useNavigate();

  

  
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center px-8 overflow-hidden"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Gradient overlay for a subtle and visually appealing effect */}

      <div className="sm:max-w-md text-center justify-center items-start text-white p-3 m-2 order-2 lg:order-1 cursor-pointer">
        <h1 className="font-sans font-bold text-xl leading-7 mt-9 text-start sm:text-3xl sm:leading-10 sm:whitespace-nowrap md:font-extrabold md:-tracking-tight md:text-2xl md:leading-10 md:mt-24 lg:text-4xl">
          Smart Diet plan, Healthier You, Personalized
        </h1>
        <h5 className="sm:text-base sm:leading-6 text-start sm:tracking-wider sm:m-2 text-xs md:text-xl md:mt-7 md:tracking-wide font-semibold">
          Discover meals tailored to your health goals with our intelligent
          Diet plane recommendation Engine. Achieve a healthier you with personalized
          nutrition plans.
        </h5>

        <div className="justify-center items-center mt-8">
          {/* {loggedInUser ? (
            <button
              onClick={handleLogout}
              className="bg-green-500 text-white font-bold md:py-2 md:px-4 p-2 rounded-full lg:px-8 lg:py-3 cursor-pointer"
            >
              Logout
            </button>
          ) : ( */}
          <button
            className="bg-green-500 text-white font-bold md:py-2 md:px-4 p-2 rounded-full lg:px-5 lg:py-3 cursor-pointer"
            onClick={() => navigate("/getstarted")}
          >
            Get Started
          </button>
          {/* )} */}
        </div>
      </div>

      {/* Image placement and styling */}
      {/* <img
        src={bg}
        alt="Person using app"
        className="lg:absolute lg:inset-y-1/2 lg:right-0 lg:w-1/3 lg:h-auto lg:object-cover hidden lg:block rounded-lg shadow-lg sm:w-1/2 sm:h-1/2"
      /> */}
    </div>
  );
}

export default HeroSection;
