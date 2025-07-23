import { Menu, X, Shirt } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"; // Add this import

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="px-4 md:px-8 lg:px-16 mx-auto text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Shirt className="w-7 h-7 mr-2 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              Launready
            </span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12 text-lg">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="hidden lg:flex space-x-12 items-center">
            <Link to="/login" className="py-2 px-3 border rounded-md">
              Sign In
            </Link>

            <a
              href="#"
              className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 py-2 px-3 rounded-md"
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
          <div className="fixed bg-white/90 right-0 z-50 w-full p-12 flex flex-col justify-center items-center backdrop-blur-lg lg:hidden">
            <ul>
              <div className="flex items-center justify-center">
                <li className="py-4">
                  <a href="#home">Home</a>
                </li>
              </div>

              <div className="flex items-center justify-center">
                <li className="py-4">
                  <a href="#features">Features</a>
                </li>
              </div>

              <div className="flex items-center justify-center">
                <li className="py-4">
                  <a href="#contact">Contact</a>
                </li>
              </div>
            </ul>

            <div className="flex space-x-6">
              <Link to="/login" className="py-2 px-3 border rounded-md">
                Sign In
              </Link>
              <Link
                to="/login"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-700 to-blue-500 text-white"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
// filepath: d:\Launready\frontend\src\pages\landing_page\nav_bar.tsx
