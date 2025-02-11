import pic from "../../assets/Rectangle .png";
import Button from "../../components/Button";
import { FiArrowUpRight } from "react-icons/fi";
import { RiArrowRightLine } from "react-icons/ri";
const Section10 = () => {
  return (
    <section className="max-w-contained mx-auto mt-10">
      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-[45%]">
          <img className="pointer-events-none" src={pic} alt="" />
        </div>
        <div className="w-full md:w-[55%] gap-4 relative  p-10 font-onest bg-secondary flex-1 flex flex-col">
          <h2 className="text-primary text-[24px]  font-normal">
            Pronto a iniziare il tuo viaggio?
          </h2>
          <p className=" font-roboto font-light text-white text-[32px]">
            Genoa ES può aiutarti a raggiungere i tuoi obiettivi accademici,
            imprenditoriali e professionali.
          </p>
          <RiArrowRightLine className="absolute left-0 bottom-0 -translate-x-[20%] translate-y-[20%] text-primary/10 text-[350px]" />
          <Button className="items-center justify-center my-3 mt-auto ml-auto">
            Scopri il nostro programma
            <FiArrowUpRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Section10;
