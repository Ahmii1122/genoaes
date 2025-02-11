import BorderLine from "../../components/border";
import picture from "../../assets/Network 3.png";
import { FaArrowRight } from "react-icons/fa6";
import anthem from "../../assets/logos/anthem.png";
import apple from "../../assets/logos/apple.png";
import earlybird from "../../assets/logos/earlybird.png";
import google from "../../assets/logos/google.png";
import microsoft from "../../assets/logos/microsoft logo.png";
import molten from "../../assets/logos/molten.png";
import oracle from "../../assets/logos/oracle.png";
import sequoia from "../../assets/logos/sequoia.png";
import stripe from "../../assets/logos/stripe.png";
import tesla from "../../assets/logos/tesla.png";
import worldfund from "../../assets/logos/worldfund.png";
const Section7 = () => {
  return (
    <section className="max-w-contained mx-auto">
      <div>
        <p className="font-roboto font-normal text-primary text-[24px]">
          Chi è nel nostro network?
        </p>
        <BorderLine />
      </div>
      <div
        className="max-w-contained overflow-auto bg-cover md:pl-[30%] p-2 relative"
        style={{ background: `url(${picture})` }}
      >
        <div className="z-20 flex flex-col items-end gap-10 relative">
          <p className=" mt-4 mx-2 font-light left-[40%] text-white font-onest text-[24px] lg:text-[48px]">
            Si sono uniti a noi esperti che hanno
            <span className="text-primary"> raccolto</span> più di
            <span className="text-primary">
              7.5 miliradi e gestiscono 100 miliardi
            </span>
            in asset
          </p>
          <p className=" mr-8 text-white font-light font-roboto text-[16px] lg:text-[24px]">
            Esperti di fama mondiale dedicano il loro tempo per aiutare i nostri
            studenti a crescere
          </p>
          <button className="border text-white h-[52px] px-4 items-center flex border-white">
            Scopri il nostro network
            <FaArrowRight />
          </button>
          <div className=" px-3 right-2 flex flex-wrap gap-4 items-center justify-between mt-4 ml-auto">
            {logos.map(({ id, logo, title }) => (
              <img
                key={id}
                src={logo}
                alt={title}
                className="h-auto max-h-screen object-contain "
              />
            ))}
          </div>
        </div>
        <div className="z-10 bg-gradient-to-l from-black from-30% to-transparent absolute inset-0 w-full h-full" />
      </div>
    </section>
  );
};

export default Section7;
const logos = [
  { id: 1, logo: google, title: "google logo" },
  { id: 2, logo: apple, title: "Apple logo" },
  { id: 3, logo: tesla, title: "tesla logo" },
  { id: 4, logo: microsoft, title: "Microsoft logo" },
  { id: 5, logo: oracle, title: "oracle logo" },
  { id: 7, logo: sequoia, title: "Sequoia Logo" },
  { id: 8, logo: earlybird, title: "Earlybird Logo" },
  { id: 9, logo: molten, title: "Molten Logo" },
  { id: 10, logo: worldfund, title: "Worldfund Logo" },
  { id: 11, logo: anthem, title: "Anthem Logo" },
  { id: 6, logo: stripe, title: "Stripe Logo" },
];
