// import React, { useState } from "react";
// import { IoFastFoodSharp } from "react-icons/io5";
// import { TiThMenu } from "react-icons/ti";
// import { IoMdCloseCircle } from "react-icons/io";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isAboutHovered, setIsAboutHovered] = useState(false);

//   const handleMenu = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <>
//       <nav className="p-2 flex justify-between items-center bg-green-500 font-sans sticky top-0 z-40 ">
//         <div className="flex items-center mt-2">
//           <IoFastFoodSharp className="text-5xl p-2 bg-green-500 rounded-full " />
//           <span className="text-xl font-semibold m-2  font-sans">
//             SmartPalate
//           </span>
//         </div>

//         {/* Nav menu */}
//         <div className={`lg:flex gap-8 hidden ${isNavOpen ? "hidden" : ""}`}>
//           <Link
//             to="/"
//             className="text-lg font-medium text-white hover:border-b-2 hover:border-green-700"
//           >
//             Home
//           </Link>

//           <Link
//             to="/aboutus"
//             className="text-lg font-medium text-white hover:border-b-2 hover:border-green-700"
//           >
//             About Us
//           </Link>
//           <div
//             onMouseEnter={() => setIsAboutHovered(true)}
//             onMouseLeave={() => setIsAboutHovered(false)}
//             className="relative "
//           >
//             <Link
//               to="/menues"
//               className="text-lg font-medium text-white  hover:border-b-2 hover:border-green-700"
//             >
//               Menues
//             </Link>
//             {isAboutHovered && (
//               <div className="absolute left-0 top-full mt-2 w-48 text-white shadow-lg rounded">
//                 <Link
//                   to="menu1"
//                   className="block px-4 py-2 hover:border-b-2 hover:border-green-700"
//                 >
//                   Menu 1
//                 </Link>
//                 <Link
//                   to="menu2"
//                   className="block px-4 py-2 hover:border-b-2 hover:border-green-700"
//                 >
//                   Menu 2
//                 </Link>
//                 <Link
//                   to="menu3"
//                   className="block px-4 py-2  hover:border-b-2 hover:border-green-700"
//                 >
//                   Menu 3
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link
//             to="/premium"
//             className="text-lg font-medium text-white hover:border-b-2 hover:border-green-700"
//           >
//             Premium
//           </Link>
//         </div>

//         <div className="m-3 lg:flex hidden ">
//           {/* Sign in */}
//           <button className="bg-green-800  hover:border-b-2 hover:border-green-500 m-2 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
//             <Link to="/signin">SignIn</Link>
//           </button>
//           {/* Sign up */}
//           <button className="bg-green-800 hover:bg-green-700 m-2 text-white font-bold py-1 px-2 rounded">
//             <Link to="/signup">SignUp</Link>
//           </button>
//         </div>

//         {/* Menu button */}
//         <div className="lg:hidden">
//           <button className="p-2" onClick={handleMenu}>
//             {isNavOpen ? (
//               <IoMdCloseCircle className="text-green-500 text-3xl" />
//             ) : (
//               <TiThMenu className="text-green-400 text-3xl hover:border-green-500 mt-2" />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile menu */}
//       {isNavOpen && (
//         <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-90 flex justify-end">
//           <div className="w-2/3 bg-black h-full overflow-y-auto">
//             <div className="p-4">
//               <div className="flex justify-between items-center mb-4">
//                 <Link to="#" id="brand" className="flex items-center">
//                   <IoFastFoodSharp className="text-green-500 text-4xl rounded-full " />
//                   <span className="text-xl font-sans text-white hover:border-b-2 hover:border-green-500">
//                     SmartPalate
//                   </span>
//                 </Link>
//                 <button onClick={handleMenu}>
//                   <IoMdCloseCircle className="text-white text-3xl hover:border-b-2 hover:border-green-500 " />
//                 </button>
//               </div>
//               <div className="flex flex-col gap-4">
//                 <Link
//                   to="/"
//                   className="text-lg font-sans text-white hover:bg-white hover:text-black"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   to="/aboutus"
//                   className="text-lg font-sans text-white hover:bg-white hover:text-black"
//                 >
//                   About Us
//                 </Link>
//                 <Link
//                   to="allrecipies"
//                   className="text-lg font-sans text-white hover:bg-white hover:text-black"
//                 >
//                   All Recipes
//                 </Link>
//                 <Link
//                   to="/premium"
//                   className="text-lg font-sans text-white hover:bg-white hover:text-black"
//                 >
//                   Premium
//                 </Link>
//                 <Link
//                   to="/signin"
//                   className="text-lg font-sans text-white hover:bg-white hover:text-black py-1 px-2 rounded-lg"
//                 >
//                   Sign In
//                 </Link>
//                 <Link
//                   to="signup"
//                   className="text-lg font-sans text-white hover:bg-white hover:text-black py-1 px-2 rounded-lg"
//                 >
//                   Sign Up
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;

// gpt
import React, { useState } from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  const handleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="p-2 flex justify-between items-center bg-green-500 font-sans sticky top-0 z-40">
        <div className="flex items-center mt-2">
          <IoFastFoodSharp className="text-5xl p-2 bg-green-500 rounded-full" />
          <span className="text-xl font-semibold m-2 font-sans">
            SmartPalate
          </span>
        </div>

        {/* Nav menu */}
        <div className={`lg:flex gap-8 hidden ${isNavOpen ? "hidden" : ""}`}>
          <Link
            to="/"
            className="text-lg font-medium text-white hover:border-b-2 hover:border-green-700"
          >
            Home
          </Link>

          <Link
            to="/aboutus"
            className="text-lg font-medium text-white hover:border-b-2 hover:border-green-700"
          >
            About Us
          </Link>
          <div
            onMouseEnter={() => setIsAboutHovered(true)}
            onMouseLeave={() => setIsAboutHovered(false)}
            className="relative"
          >
            <Link
              to="/menues"
              className="text-lg font-medium text-white hover:border-b-2 hover:border-green-700"
            >
              Menues
            </Link>
            {isAboutHovered && (
              <div className="absolute left-0 top-full mt-2 w-48 text-white shadow-lg rounded">
                <Link
                  to="/menu1"
                  className="block px-4 py-2 hover:border-b-2 hover:border-green-700"
                >
                  Menu 1
                </Link>
                <Link
                  to="/menu2"
                  className="block px-4 py-2 hover:border-b-2 hover:border-green-700"
                >
                  Menu 2
                </Link>
                <Link
                  to="/menu3"
                  className="block px-4 py-2 hover:border-b-2 hover:border-green-700"
                >
                  Menu 3
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/premium"
            className="text-lg font-medium text-white hover:border-b-2 hover:border-green-700"
          >
            Premium
          </Link>
        </div>

        <div className="m-3 lg:flex hidden">
          {/* Sign in */}
          <button className="bg-green-800 hover:border-b-2 hover:border-green-500 m-2 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
            <Link to="/signin">SignIn</Link>
          </button>
          {/* Sign up */}
          <button  onclick={console.log("signup clicked ")} className="bg-green-800 hover:bg-green-700 m-2 text-white font-bold py-1 px-2 rounded">
            <Link to="/signup">SignUp</Link>
           
          </button>
        </div>

        {/* Menu button */}
        <div className="lg:hidden">
          <button className="p-2" onClick={handleMenu}>
            {isNavOpen ? (
              <IoMdCloseCircle className="text-green-500 text-3xl" />
            ) : (
              <TiThMenu className="text-green-400 text-3xl hover:border-green-500 mt-2" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isNavOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-90 flex justify-end">
          <div className="w-2/3 bg-black h-full overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <Link to="#" id="brand" className="flex items-center">
                  <IoFastFoodSharp className="text-green-500 text-4xl rounded-full" />
                  <span className="text-xl font-sans text-white hover:border-b-2 hover:border-green-500">
                    SmartPalate
                  </span>
                </Link>
                <button onClick={handleMenu}>
                  <IoMdCloseCircle className="text-white text-3xl hover:border-b-2 hover:border-green-500" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                  Home
                </Link>
                <Link
                  to="/aboutus"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                  About Us
                </Link>
                <Link
                  to="/menues"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                  Menues
                </Link>
                <Link
                  to="/premium"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black"
                >
                  Premium
                </Link>
                <Link
                  to="/signin"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black py-1 px-2 rounded-lg"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="text-lg font-sans text-white hover:bg-white hover:text-black py-1 px-2 rounded-lg"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
