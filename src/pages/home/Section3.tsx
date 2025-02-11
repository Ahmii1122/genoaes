import { FaArrowRight } from "react-icons/fa6";
import logo1 from "../../assets/Ranking1.png";
import logo2 from "../../assets/Ranking2.png";

const Section3 = () => {
  return (
    <section className="relative max-w-contained mx-auto bg-cream min-h-[580px]">
      <div className="text-primary mx-2 font-normal text-[24px] mb-2">
        <p>Cosa è Genoa Entrepreneurship School?</p>
      </div>
      <div className=" relative h-[1px] mx-2 border-b border-gray-400">
        <div className=" absolute h-[1px] w-[20%] border-b border-black"></div>
      </div>
      <div className="flex flex-col md:flex md:flex-row mt-8 gap-10 mx-2">
        <p className="font-onest font-light items-center justify-between text-[48px] uppercase">
          Connettiamo accademia e start up
        </p>
        <p className="font-roboto font-light text-[20px] mt-4 text-left items-center justify-between">
          Siamo un'iniziativa congiunta tra l'Università di Genova, le aziende e
          le istituzioni. Siamo convinti che il miglior momento di lanciare una
          startup sia quando si è all’università, come hanno fatto Mark
          Zuckerberg, Bill Gates e Elon Musk e tanti altri. Il nostro obiettivo
          è quello di formare i nuovi imprenditori attraverso esperienze di
          apprendimento dinamiche con esperti del settore, aziende e
          l'Università di Georgetown.
        </p>
      </div>
      <div className="mt-5 mx-2 font-roboto font-normal opacity-80">
        <p>Academic partners </p>
        <div className="grid grid-cols-1 justify-center mt-4 gap-[16px] lg:grid-cols-2">
          {logos.map(({ id, logo, title }) => (
            <img
              key={id}
              src={logo}
              alt={title}
              className="h-auto object-contain  "
            />
          ))}
        </div>
        <div className="">
          <a
            href=""
            className=" bottom-4 right-4 flex  bg-transparent  border-black border-[1px] hover:text-white 
           text-black gap-2 mx-[14px] my-[24px] justify-center items-center lg:w-[253px]
            h-[52px] font-medium px-6 py-[14px] text-lg hover:bg-primary-light lg:ml-[79%]"
          >
            Read More About US
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section3;
const logos = [
  { id: 1, logo: logo1, title: "Ranking1" },
  { id: 2, logo: logo2, title: "Rankin2" },
];
