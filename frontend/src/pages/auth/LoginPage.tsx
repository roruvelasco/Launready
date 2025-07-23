import { Shirt, ShieldCheck } from "lucide-react";

const login = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen md:px-20">
      <div className="flex shadow-xl w-[90vw] max-w-7xl justify-between rounded-2xl">
        {/* LEFT SIDE */}
        <div className="w-1/2 flex px-8 md:px-16 lg:px-24 py-12 bg-white rounded-l-2xl">
          <div className="flex">
            {/* Keep original logo */}
            <Shirt className="w-5 h-5 mr-2 text-blue-500" />
            <span>Launready</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-cyan-400 via-teal-400 to-blue-500 rounded-r-2xl">
          <div className="flex flex-col items-center mt-16 mb-16 px-5 space-y-2">
            {/* Change only the right icon */}
            <ShieldCheck className="w-48 h-48 text-white mb-16" />

            <h2 className="text-white font-semibold tracking-wide md:text-xl lg:text-2xl text-center">
              Securely connect with Launready.
            </h2>
            <p className="hidden lg:block text-sm text-neutral-200 mt-2 text-center tracking-wider">
              Experience seamless authentication with our secure login system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
