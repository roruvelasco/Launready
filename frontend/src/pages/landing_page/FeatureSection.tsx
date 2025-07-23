import { Truck, Shield, Clock, PhilippinePeso } from "lucide-react";

const FeatureSection = () => {
  const featuresData = [
    {
      id: 1,
      title: "Seamless Pickup & Drop-off",
      desc: "Book a pickup or drop off in our nearest branch. Your laundry, your way.",
      icon: <Truck />,
      bgColor: "linear-gradient(90deg, #22d3ee 0%, #2dd4bf 50%, #3b82f6 100%)", // cyan-400, teal-400, blue-500
      delay: 0.3,
    },
    {
      id: 1,
      title: "Accurate Billing, Always",
      desc: "Get notified of the exact weight and final price before you pay.",
      icon: <PhilippinePeso />,
      bgColor: "linear-gradient(90deg, #22d3ee 0%, #2dd4bf 50%, #3b82f6 100%)", // cyan-400, teal-400, blue-500
      delay: 0.3,
    },
    {
      id: 1,
      title: "Always One Step Ahead",
      desc: "Stay updated effortlessly, so your laundry is ready when you are.",
      icon: <Clock />,
      bgColor: "linear-gradient(90deg, #22d3ee 0%, #2dd4bf 50%, #3b82f6 100%)", // cyan-400, teal-400, blue-500
      delay: 0.3,
    },
    {
      id: 1,
      title: "Peace of Mind, Guaranteed",
      desc: "Stay confident knowing your laundry is handled with care.",
      icon: <Shield />,
      bgColor: "linear-gradient(90deg, #22d3ee 0%, #2dd4bf 50%, #3b82f6 100%)", // cyan-400, teal-400, blue-500
      delay: 0.3,
    },
  ];

  return (
    <div className="mt-20 border-b border-neutral-300 min-h-[750px] sm:min-h-[600px]">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
        className="text-center "
      >
        <span className="text-2xl md:text-3xl font-medium px-2 py-1 uppercase">
          Features
        </span>

        <h2 className="text-3xl sm:text-5xl lg-text-6xl mt-10 lg:mt-20 tracking wide">
          Easily track
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-transparent bg-clip-text">
            {" "}
            your laundry
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20 max-w-5xl mx-auto">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
            className="w-full sm:w-1/2 p-2"
          >
            <div className="flex space-x-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] h-full bg-white transition-transform duration-300 hover:scale-105">
              <div className="flex h-10 w-10 justify-center items-center rounded-full text-white shrink-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500">
                {feature.icon}
              </div>
              <div>
                <p className="font-semibold">{feature.title}</p>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
