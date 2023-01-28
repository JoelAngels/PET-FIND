import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="w-full flex items-center justify-center bg-green-500 text-gray-700 shadow-lg">
        <div className="container-fluid w-4/6 flex justify-evenly items-spaced ">
          <div className="">
            <Link to="/">
              <img
                alt=""
                src="https://my-video-five.vercel.app/image/logo%201.png"
                className="w-32 h-28 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <Link
              className="text-xl hover:text-rose-500 font-semibold"
              to="/animalList"
            >
              FIND PET
            </Link>
          </div>
          <div>
            <Link
              className="text-xl hover:text-rose-500 font-semibold"
              to="/organizationList"
            >
              ORGANISATIONS & OTHER
            </Link>
          </div>
          <div>
            <Link
              className="text-xl hover:text-rose-500 font-semibold"
              to="/login"
            >
              LOGIN OR SIGN IN
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
