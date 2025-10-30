import { useForm } from "react-hook-form";
import loginImg from "../../assets/loginImg.jpg";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialMedia from "./SocialMedia";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Invalid Email and Password");
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen relative animate__animated animate__fadeIn">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${loginImg})`, filter: "blur(5px)" }}
      ></div>
      <div className="relative hero bg-black/40 bg-opacity-70 min-h-screen z-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-white px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome Back!</h1>
            <p className="text-xl mb-8 max-w-lg">
              Login to access your personalized dashboard, manage your orders, 
              and connect with local farmers.
            </p>
            <div className="flex justify-center lg:justify-start">
              <img 
                src="https://i.ibb.co/5RKgH3K/logo.png" 
                alt="Krishi Bondhu" 
                className="w-40 rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="card bg-white/90 backdrop-blur-sm w-full max-w-md shrink-0 shadow-2xl rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-8">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
              
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-gray-700 font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="input input-bordered bg-white border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-lg py-3 px-4"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                )}
              </div>
              
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text text-gray-700 font-medium">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    className="input input-bordered w-full bg-white border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-lg py-3 px-4 pr-12"
                    {...register("password", { required: "Password is required" })}
                  />
                  <span 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-xl" />
                    ) : (
                      <FaEye className="text-xl" />
                    )}
                  </span>
                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>
                )}
              </div>
              
              <div className="form-control mb-6">
                <button className="btn bg-green-600 hover:bg-green-700 border-none text-white font-bold py-3 rounded-lg transition-colors duration-300 transform hover:scale-[1.02]">
                  Login
                </button>
              </div>
              
              <div className="text-center mb-6">
                <p className="text-gray-600">
                  Don&#39;t have an account?{" "}
                  <Link to="/register" className="text-green-600 font-semibold hover:underline">
                    Register
                  </Link>
                </p>
              </div>
              
              <div className="divider text-gray-500">OR</div>
              
              <div className="text-center">
                <SocialMedia />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;