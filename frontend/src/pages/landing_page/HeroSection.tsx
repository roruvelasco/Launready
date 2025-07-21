const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 border-b border-neutral-300">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
        className="font-semibold text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
      >
        Never stress your
        <br />
        <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
          laundry again
        </span>
      </h1>

      <p
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
        className="mt-19 text-lg text-center text-neutral-500 max-w-4xl"
      >
        Track your laundry with ease and stay informed every step of the way.
        Get real-time updates and enjoy a hassle-free laundry experience!
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
        className="flex justify-center my-10"
      >
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-700 py-3 px-4 mx-3 rounded-md"
        >
          <span className="text-white">Start Now</span>
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
