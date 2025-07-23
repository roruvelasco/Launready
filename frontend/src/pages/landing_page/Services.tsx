import { CircleCheck } from "lucide-react";

const serviceData = [
  {
    title: "Pick-up",
    description: [
      "Right at your doorstep",
      "Convenient scheduling",
      "Flexible time slots",
    ],
  },
  {
    title: "Drop-off",
    description: [
      "Direct to our nearest branch",
      "Many locations around the city",
      "Immediate service",
    ],
  },
  {
    title: "tite",
    description: [
      "Direct to our nearest branch",
      "Many locations around the city",
      "Immediate service",
    ],
  },
];

const Services = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-bottom"
      className="mt-20 lg:px-20"
    >
      <h2 className="text-3xl sm:text-3xl lg:text-6xl text-center my-8 tracking-wider uppercase">
        Services
      </h2>
      <div className="flex flex-wrap items-stretch">
        {serviceData.map((service, index) => (
          <div key={index} className="w-full md:w-1/3 p-2">
            <div className="p-10 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] h-full transition-transform duration-300 hover:scale-105">
              <p className="text-4xl mb-8">{service.title}</p>
              <ul>
                {service.description.map((desc, idx) => (
                  <li key={idx} className="mt-8 flex items-center">
                    <CircleCheck color="#22d3ee" />
                    <span className="ml-2"> {desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
