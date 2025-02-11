import video from "../../assets/video.mp4";
import { FaArrowRight } from "react-icons/fa";

const Section1 = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-white text-center">
      <video
        className="absolute inset-0 w-full h-full object-cover z-10"
        src={video}
        autoPlay
        loop
        muted
      ></video>
      <section className="relative max-w-contained mx-auto p-5 flex flex-col justify-center items-center w-full h-full z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
          Trasforma le tue idee in opportunità
        </h1>
        <p className="text-lg md:text-xl max-w-[940px] px-[40px] text-center text-wrap mb-3 uppercase">
          Impara sul campo come costruire una startup con il master più
          internazionale d'Italia, affiancato dai leader del settore negli Stati
          Uniti e in Europa.
        </p>
        <div className="justify-center uppercase pt-[20px] flex flex-col gap-4 md:flex md:flex-row ">
          <a
            href="#"
            className="bg-white font-medium text-center justify-center items-center uppercase hover:bg-[#FCFAF2] hover:text-[#193E2C] border border-[#FCFAF2] text-black text-[16px] px-[24px] py-[12px]"
          >
            Scopri la nostra differenza
          </a>
          <a
            href="#"
            className="flex bg-primary gap-2 justify-center items-center font-medium text-white px-6 py-[14px] text-lg hover:bg-primary-light"
          >
            Scopri di più sul nostro programma
            <FaArrowRight className="" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Section1;
