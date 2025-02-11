import BorderLine from "../../components/border";
import pic from "../../assets/Voss-Genoaes 14.png";
import Button from "../../components/Button";
import { BsArrowRight } from "react-icons/bs";

const Section8 = () => {
  return (
    <section className="max-w-contained mx-auto mt-16">
      <div className="mb-4">
        <p className="font-roboto text-[24px] text-primary">
          Come è la vita in Genoa Entrepreneurship School?
        </p>
        <BorderLine />
      </div>
      <div className="flex flex-col-reverse lg:flex-row bg-cream2">
        <div className="w-full lg:w-1/2 flex flex-col justify-between p-5">
          <div>
            <h1 className="text-[40px] font-onest font-light mx text-wrap text-primary">
              Impara e costruisci con i migliori{" "}
              <span className="text-black">ogni giorno</span>
            </h1>
            <p className="font-roboto text-[18px] p-5 text-wrap">
              Vivi, lavora e cresci in città vibranti come New York, Washington
              o San. Francisco. Esplorerai luoghi iconici come il Campus di
              Google, il grattacielo di Meta e la prima fabbrica Tesla.
            </p>
            -
          </div>
          <Button variant="outline" theme="light" className="self-end">
            Scopri come è la vita durante il programma
            <BsArrowRight />
          </Button>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={pic} alt="" className="object-contain max-h-full w-full" />
        </div>
      </div>
    </section>
  );
};

export default Section8;
