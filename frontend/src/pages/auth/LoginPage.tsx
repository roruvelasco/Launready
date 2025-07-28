import { Shirt, ShieldCheck, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import type { ReactNode } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type IconButtonProps = {
  children: ReactNode;
  text: string;
  iconColor?: string;
  [key: string]: any; // for ...props
};

function IconButton({ children, text, iconColor, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className="text-lg border border-gray-200 text-stone-600 flex justify-center items-center gap-x-2 w-full py-3 mt-6"
    >
      <span style={{ color: iconColor }}>{children}</span>
      <div className="font-semibold text-base text-gray-500">{text}</div>
    </button>
  );
}

type IconInputProps = {
  children: ReactNode;
  placeholder?: string;
  type?: string;
  [key: string]: any;
};

function IconInput({
  children,
  placeholder,
  type,
  rightIcon,
  onRightIconClick,
}: IconInputProps & { rightIcon?: ReactNode; onRightIconClick?: () => void }) {
  return (
    <div className="flex items-center w-full h-12 border border-gray-200 mt-4 bg-white rounded-md relative">
      <span className="text-xl opacity-80 text-gray-500 mx-3">{children}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 h-full bg-transparent outline-none text-gray-700 pr-10"
      />
      {rightIcon && (
        <button
          type="button"
          onClick={onRightIconClick}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          tabIndex={-1}
        >
          {rightIcon}
        </button>
      )}
    </div>
  );
}

const login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center w-full py-20 md:px-20">
      {/* Back Button */}
      <button
        className="flex fixed top-8 left-8 items-center gap-2 text-blue-500 hover:text-blue-700 transition-colors font-medium"
        onClick={() => navigate("/landing")}
      >
        <ArrowLeft className="w-6 h-6" />
        Back
      </button>

      <div className="flex w-[90vw] max-w-7xl justify-between rounded-2xl">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col px-8 md:px-16 lg:px-24 py-2 bg-white rounded-l-2xl rounded-r-2xl">
          <div className="flex justify-left gap-x-1 items-center">
            <Shirt className="w-5 h-5 mr-2 text-blue-500" />
            <span>Launready</span>
          </div>

          <h1 className="text-3xl font-semibold mt-6 opacity-80 text-neutral-800">
            Log in to your account
          </h1>
          <p className="text-black opacity-60 mt-3">
            Welcome back! Select method to log in.
          </p>

          <div>
            <IconButton text="Google">
              <FcGoogle className="w-5 h-5" />
            </IconButton>
          </div>

          <div className="flex flex-col justify-center items-center space-y-4">
            <p className="mt-6 text-gray-500 text-sm">or continue with email</p>
          </div>

          <IconInput placeholder="Email" type="email">
            <MdEmail />
          </IconInput>
          <IconInput
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            rightIcon={
              showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )
            }
            onRightIconClick={() => setShowPassword((prev) => !prev)}
          >
            <RiLockPasswordLine />
          </IconInput>

          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 hover:underline text-end mt-3 text-sm transition-colors"
          >
            Forgot Password?
          </a>

          <p className="text-center mt-6 text-neutral-500">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-500 hover:underline"
            >
              Create an account
            </a>
          </p>

          <button className="bg-blue-500 text-white w-full py-3 rounded-md mt-5 text-xl hover:bg-blue-600 transition-colors shadow hover:shadow-lg">
            Log in
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-br from-cyan-400 via-teal-400 to-blue-500 rounded-r-2xl">
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
