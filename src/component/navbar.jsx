import images from "../assets/images/images";
import icon from "../assets/icon/icon";
import NavLinks from "./navlink";
import Button from "./Button";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="flex w-[90vw] items-center md:items-start justify-between md:justify-normal md:flex-col">
        {/* logo */}
        <a
          href="#"
          className="flex flex-row md:flex-col md:items-center space-x-2"
        >
          <img
            src={images.logo}
            alt="logo"
            className="w-14 border border-red-700"
          />
          <h2 className="font-Poppins font-bold md:text-2xl hidden md:block ">
            Secondin Aja
          </h2>
        </a>
        <h2 className="font-Poppins font-bold md:text-2xl md:hidden">
          Secondin Aja
        </h2>
        <div className="md:hidden">
          {isOpen ? (
            <IoClose
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl cursor-pointer"
            />
          ) : (
            <CiMenuFries
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl cursor-pointer"
            />
          )}
        </div>
      </div>
      {/* navigation */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-full bg-white  transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:relative md:flex font-bold font-Poppins`}
      >
        <div className="p-6 md:hidden">
          <IoClose
            onClick={() => setIsOpen(false)}
            className="text-3xl cursor-pointer"
          />
        </div>
        <NavLinks />

        {/* icon */}
        <div className="flex flex-row justify-center space-x-2 md:relative">
          <Button source={icon.bag}></Button>
          <Button source={icon.cart}></Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
