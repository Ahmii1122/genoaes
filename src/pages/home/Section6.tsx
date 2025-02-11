const Section6 = () => {
  return (
    <section className="max-w-contained mx-auto">
      <div>
        <div>
          <h1 className="font-roboto font-normal mt-5 text-primary text-2xl">
            Why Genoa Entrepreneurship School?
          </h1>
          <div className="relative h-[5px] mx-2 mb-10 border-b mt-3 border-gray-400">
            <div className="absolute h-[5px] top-0 w-[20%] border-b border-gray-600"></div>
          </div>
          <h1 className="font-roboto font-light text-[24px] lg:text-[48px]  text-center p-5 lg:ml-40 lg:items-center lg:w-[75%]">
            <span className="text-primary">Impara e cresci</span> con una guida
            esperta personalizzata mentre studi nelle città più stimolanti al
            mondo.
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row mt-4 font-light font-onest ">
          {features.map(({ id, title, points }) => (
            <div
              className=" relative mb-10 pl-4 pb-4 text-black
                 before:absolute before:inset-0 
                 before:border-gray-300 
                 lg:before:border-l-2 lg:before:h-[329px]
                 before:border-b-2 before:h-[50px] 
                 lg:before:border-b-0
                 after:absolute after:inset-0 
                 after:border-primary after:border-b-2 
                 lg:after:border-l-2 lg:after:border-b-0
                 sm:after:w-[30%] sm:after:h-[50px] 
                 lg:after:h-[100px]"
              key={id}
            >
              <h2 className="text-[32px] text-primary">{id}</h2>
              <h3 className="text-[24px]">{title}</h3>
              <ul className="list-disc list-inside">
                {points.map((point, index) => (
                  <li className="pl-4 leading-6 text-wrap mx-2" key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;

const features = [
  {
    id: "01",
    title:
      "Guida personalizzata dai migliori esperti di startup, anche se fondi la tua",
    points: [
      "Meeting 1 to 1 quando vuoi con esperti e fondatori del settore",
      "Un mentore personale ti seguirà ogni settimana durante tutto l’anno",
      "Workshop giornalieri con trucchi e consigli adatti alla tua startup",
    ],
  },
  {
    id: "02",
    title:
      "Impara combinando teoria e pratica, costruendo nelle più stimolanti città in USA e Europa",
    points: [
      "Visita il quartier generale di Meta, Tesla e Google per scoprire le loro pratiche e mentalità",
      "Fai network e lavora tra EU e US con talenti, compagnie e investitori",
      "Impara dalle leggi della finanza per fondatori grazie a due ottime università",
    ],
  },
  {
    id: "03",
    title:
      "Il 75% dei nostri studenti chiude un round di finanziamento entro 6 mesi",
    points: [
      "Gli investitori nel nostro network gestiscono più di 100 miliardi di dollari",
      "I nostri mentor che sono fondatori hanno raccolto più di 1,75 miliardi di dollari",
      "Laureati con una reale presentazione agli investitori anziché una tesi di laurea",
    ],
  },
];
