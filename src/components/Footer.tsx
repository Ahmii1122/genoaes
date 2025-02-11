import logo from "../assets/footer_logo.png";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
const Footer = () => {
  const links = [
    { link: "/about", title: "About" },
    { link: "/program", title: "Our Program" },
    { link: "/network", title: "Our Network" },
    { link: "/why-us", title: "Why Us?" },
    { link: "/career", title: "Career" },
  ];

  return (
    <footer className="bg-cream border-t relative border-gray-400 mx-6 h-[359px] mt-4 text-gray-800 px-6 py-8">
      <div className="container mx-auto my-20 mt-10">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-6 md:mb-0 relative gap-[40px]">
            <img src={logo} className="text-green-600 text-lg font-bold" />
            <p className="text-sm mt-2">
              Scheldays Associazione culturale e di promozione sociale
              <br />
              Piazza Santa Maria in Via Lata 11, 16128 Genoa, Italy
            </p>
            <p className="text-sm mt-4">
              Mail{" "}
              <a
                href="mailto:admission@genoaes.com"
                className="text-green-600 hover:underline"
              >
                admission@genoaes.com
              </a>
            </p>
            {/* Icons */}
            <div className="flex mt-4 gap-4"></div>
          </div>

          {/* Center Section */}
          <div className=" flex flex-col md:flex  md:flex-row gap-8">
            <div>
              <h3 className="font-bold">Navigation</h3>
              <div className="mt-4 flex flex-col md:flex-auto lg:flex-row gap-3 md:mr-32 text-nowrap w-[59%] lg:gap-[40px]">
                {links.map(({ link, title }, index) => (
                  <a
                    key={index}
                    href={link}
                    className="flex lg:flex lg:flex-row underline items-center gap-2 text-gray-700 hover:text-green-600"
                  >
                    <MdOutlineSubdirectoryArrowRight />
                    {title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
        </div>
      </div>
      <div className="text-center absolute top-1/2  right-0  font-roboto font-extralight rotate-90 md:text-right  ">
        <p className="text-[40px] font-extralight font-roboto">2025 © </p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
