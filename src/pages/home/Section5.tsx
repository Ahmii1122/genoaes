import pic from "../../assets/sec5-1.png";
import { MdOutlineArrowOutward } from "react-icons/md";

const Section5 = () => {
  return (
    <section className="relative mx-auto mt-10 max-w-contained z-10 min-h-[701px] p-0">
      <div className="my-0 font-roboto text-[24px] bg-cream text-primary">
        <p>What do we offer?</p>
        <div className="relative h-[1px] mx-2 mb-10 border-b border-gray-400">
          <div className="absolute h-[1px] top-0 w-[20%] border-b border-black"></div>
        </div>
        <div className="flex flex-col lg:flex-row bg-primary-dark h-full">
          <div className="flex-1 lg:w-1/2">
            <img src={pic} alt="Description" className="w-full h-auto" />
          </div>
          <div className="flex-1 flex flex-col p-4">
            <div>
              <p className="text-primary lg:mt-[80px] text-[48px] font-light">
                Master in International Business Creation
              </p>
            </div>
            <div className="pt-4">
              <div className="flex my-3">
                <p className="text-white text-[18px] font-thin font-roboto mx-4">
                  Durata <span className="font-bold">8 mesi</span>
                </p>
                <p className="text-white text-[18px] font-thin font-roboto mx-4">
                  Stadio dell’idea:{" "}
                  <span className="font-bold">da nessuna idea al pre seed</span>
                </p>
              </div>
              <div className="flex flex-col xl:gap-10 justify-between">
                <p className="text-white text-[18px] font-thin font-roboto mx-4">
                  Locations:
                  <span> Washington D.C., New York, San Francisco, Genoa</span>
                </p>

                <p className="text-white text-[18px] border-l p-4 border-primary font-thin font-roboto mx-4 mt-10 lg:mt-2 ml-10">
                  “Per spiegare questo corso con una frase posso dire che ti
                  cambia la vita. Non avrei mai potuto immaginare di conoscere
                  le Silicon Valley così profondamente.”
                </p>
              </div>
            </div>
            {/* Button Section */}
            <div className="flex flex-col sm:flex-row justify-end text-center mt-6 w-full">
              <button className="w-full lg:w-[60%] lg:w-[60 %] text-nowrap bg-primary h-[52px] text-white py-2 flex items-center justify-center hover:bg-primary-light">
                SCOPRI IL PROGRAMMA
                <MdOutlineArrowOutward className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
