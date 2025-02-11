import logo1 from "../../assets/Layer_1.png";
import logo2 from "../../assets/Vector 2.png";
import logo3 from "../../assets/microsoft logo.png";
import logo4 from "../../assets/meta-1 logo.png";
import logo5 from "../../assets/Group 2.png";
import logo6 from "../../assets/Frame.png";

const Section2 = () => {
  return (
    <section className=" max-w-contained mx-auto p-[45px] -mt-[100px] min-h-[100px]  bg-cream z-10 relative">
      <div className="flex flex-col lg:flex lg:flex-row  gap-[40px] text-center justify-center">
        <div>
          <p className="font-onest font-light text-[64px] lg:text-[90px]">
            $320K
          </p>
          <p className="font-roboto font-normal  text-[18px] ">
            raccolta di capitali media dei nostri studenti
          </p>
        </div>
        <div>
          <p className="font-onest font-light text-[64px] lg:text-[90px]">
            75%
          </p>
          <p className="font-roboto font-normal text-[18px] ">
            dei nostri studenti ha raccolto finanziamenti per la loro startup
          </p>
        </div>
        <div>
          <p className="font-onest font-light text-[64px] lg:text-[90px]">
            9.8/10
          </p>
          <p className="font-roboto font-normal text-[18px]  ">
            soddisfazione dei nostri studenti
          </p>
        </div>
      </div>
      <div className="pt-4">
        <p className="text-[32px]  text-primary font-medium font-roboto">
          Con la guida dei migliori mentori del settore
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid md:grid-cols-3 lg:grid-cols-6 gap-[40px] justify-items-center items-center mt-4 md:w-[80%] ml-auto">
        {logos.map(({ id, logo, title }) => (
          <img
            key={id}
            src={logo}
            alt={title}
            className="h-auto object-contain  "
          />
        ))}
      </div>
    </section>
  );
};

export default Section2;

const logos = [
  { id: 1, logo: logo1, title: "sequoa" },
  { id: 2, logo: logo2, title: "Apple" },
  { id: 3, logo: logo3, title: "Microsoft" },
  { id: 4, logo: logo4, title: "Meta" },
  { id: 5, logo: logo5, title: "Google" },
  { id: 6, logo: logo6, title: "Tesla" },
];
