import { Menu, X, Shirt } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Shirt className="w-7 h-7 mr-2 text-blue-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              Launready
            </span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <a href="Home">Home</a>
            </li>
            <li>
              <a href="Features">Features</a>
            </li>
            <li>
              <a href="Contact">Contact</a>
            </li>
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>

            <a
              href="#"
              className="bg-gradient-to-r from-blue-700 to-blue-500 py-2 px-3 rounded-md"
            >
              <span className="text-white">Get Started</span>
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="backdrop-blur-lg fixed bg-white/90 right-0 z-50 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li className="py-4">Home</li>
              <li className="py-4">Features</li>
              <li className="py-4">Contact</li>
            </ul>

            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-700 to-blue-500"
              >
                Sign In
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
