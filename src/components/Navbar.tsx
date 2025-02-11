import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import logo from "../assets/Union.png";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 75);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-secondary text-white shadow-md"
          : "bg-transparent text-[#FCFAF2]"
      } fixed top-0 left-0 w-full h-auto z-[99999] `}
    >
      <div className="max-w-contained w-[90%] mx-auto py-5 flex items-center justify-between border-b border-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className=" bottom-[10px] md:bottom-[20px] w-[112px] md:w-[200px]"
          >
            <img src={logo} alt="Logo" className="opacity-100 my-auto" />
          </a>
        </div>
        {/* Links */}
        <div className="flex items-center font-normal gap-[10px] lg:gap-[30px] text-nowrap">
          {navLinks.map(({ link, title }, index) => (
            <a
              href={link}
              key={index}
              className="hidden lg:inline text-[14px] font-normal font-roboto hover:bg-primary py-[8px] text-current"
            >
              {title}
            </a>
          ))}
          <a
            className="px-[18px] ml-[0px] font-normal text-[14px] font-roboto hover:bg-primary-light py-[8px] text-current bg-primary flex items-center gap-2"
            href="#Candidati"
          >
            Candidati
            <FaArrowRight />
          </a>
          <div className="p-[8px] bg-primary lg:hidden">
            <FaBars size={20} color="white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const navLinks = [
  { link: "/chi-siamo", title: "Chi siamo" },
  { link: "/il-master", title: "Il Master" },
  { link: "/il-nostronetwork", title: "Il nostro network" },
  { link: "/perche-sceglierci", title: "Perché sceglierci?" },
  { link: "/carriera", title: "Carriera" },
  { link: "/it", title: "IT" },
];
