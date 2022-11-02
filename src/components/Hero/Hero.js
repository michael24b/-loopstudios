import logo from "../../images/logo.svg";
import Hamburger from "./Hamburger";
import LinkItem from "./LinkItem";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(true);
  const buttonState = (state) => {
    setIsOpen(state);
  };

  return (
    <section id="hero">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <nav className="flex items-center justify-between font-bold text-white">
          {/* Logo */}
          <img src={logo} alt="" />
          {/* Menu */}
          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            <LinkItem title="About" />
            <LinkItem title="Careers" />
            <LinkItem title="Events" />
            <LinkItem title="Products" />
            <LinkItem title="Support" />
          </div>
          {/* Hamberger button */}
          <Hamburger onClick={buttonState} />
        </nav>
        {/* Mobile Menu */}
        <div
          id="menu"
          className={`${
            isOpen && "hidden"
          } absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}
        >
          <a href className="hover:text-pink-500">
            About
          </a>
          <a href className="hover:text-pink-500">
            Careers
          </a>
          <a href className="hover:text-pink-500">
            Events
          </a>
          <a href className="hover:text-pink-500">
            Products
          </a>
          <a href className="hover:text-pink-500">
            Support
          </a>
        </div>

        <div className="max-w-lg my-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:my-32 md:text-6xl">
          Impressive Expreriences That Deliver
        </div>
      </div>
    </section>
  );
};
export default Hero;
