import logo from "../../assets/sect411.png";
import logo2 from "../../assets/sec41.png";

const Section4 = () => {
  return (
    <section className="relative  max-w-contained mx-auto h-[500px] bg-cream-sec z-[9999] overflow-hidden">
      <div className="flex flex-col-reverse lg:flex lg:flex-row">
        {/* Left Section */}
        <div className="flex flex-col ml-8 justify-between px-4 lg:px-0">
          <h2 className="text-[40px] font-light">Incontra il tuo professore</h2>
          <div className="border-l border-primary pl-4">
            <p className="font-roboto font-light text-[18px] justify-start top-3 bottom-4 text-wrap w-[90%] my-8 text-left">
              A Georgetown, crediamo nell'imprenditorialità per il bene comune.
              <span className="font-medium">
                La nostra collaborazione con la Genoa Entrepreneurship School
                allinea perfettamente i nostri valori, supportando imprenditori
                emergenti in tutto il mondo.
              </span>
            </p>
            <div className="flex flex-row mt-4 gap-[16px]">
              <img src={logo} alt="University logo" />
              <img src={logo2} alt="University logo 2" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className=" h-full lg:max-w-full ">
          <iframe
            className="w-full lg:w-[800px] h-[490px]"
            src="https://www.youtube.com/embed/kCgGesbxq30"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Section4;
