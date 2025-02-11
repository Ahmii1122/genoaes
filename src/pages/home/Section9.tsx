import { useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import img1 from "../../assets/Voss-Genoaes 11.png";
import img2 from "../../assets/image 39.png";
import img3 from "../../assets/img40.jpeg";
import { FaLinkedin } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "“Quando ho finito la triennale non volevo fare un master. Questo è un corso pratico che apre incredibili porte. È sicuramente l’esperienza che mi ha fatto crescere di più.”",
    name: "Lea Delic",
    role: "Student founder 2023",
    image: img1,
  },
  {
    id: 2,
    text: "“Quando ho finito la triennale non volevo fare un master. Questo è un corso pratico che apre incredibili porte. È sicuramente l’esperienza che mi ha fatto crescere di più.”",
    name: "Chalermchon Puapolthep",
    role: "Student founder 2023",
    image: img2,
  },
  {
    id: 3,
    text: "“Quando ho finito la triennale non volevo fare un master. Questo è un corso pratico che apre incredibili porte. È sicuramente l’esperienza che mi ha fatto crescere di più.”",
    name: "Gabriele Rossi",
    role: "Student founder 2023",
    image: img3,
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth =
        (container?.firstChild as HTMLDivElement)?.clientWidth + 24; // Card width + gap
      console.log("scrollleft", container.scrollLeft);
      console.log("clientWidth", container.clientWidth);
      console.log("scrollWidth", container.scrollWidth);
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 50
      ) {
        container.scrollLeft = 0;
        return;
      }

      container.scrollLeft += cardWidth;
    }
  };

  return (
    <div className="flex flex-col md:flex-row items- max-w-contained mx-auto mt-10">
      {/* Left Section (25% Width) */}
      <div className="w-2/6">
        <h2 className="text-[32px] pt-4 font-onest font-light text-gray-900">
          SCOPRI L'ESPERIENZA DEI NOSTRI STUDENTI
        </h2>
        <button onClick={handleScroll} className="mt-4 text-green-600">
          <GoArrowRight size={72} />
        </button>
      </div>

      {/* Right Section (Scrollable Cards) */}
      <div className="md:w-3/4 overflow-hidden relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hidden snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index} // Fix key warning by using index
              className="min-w-[436px] h-fit p-4 bg-green-100 snap-start"
            >
              <p className="text-gray-800 font-roboto font-light text-[24px] ">
                {item.text}
              </p>
              <div className="mt-4 flex flex-col items-center gap-3">
                <div>
                  <FaLinkedin size={32} />
                  <p className="font-bold text-[18px]">{item.name}</p>
                  <p className="text-[18px] text-gray-600">{item.role}</p>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full aspect-[100/61] object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
