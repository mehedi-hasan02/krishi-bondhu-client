import { useState } from "react";
import { useForm } from "react-hook-form";
import regImg from '../../assets/loginImg.jpg'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, handleUpdateProfile, logOut } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { name, email, password } = data;
        
        try {
            // Upload image to imgbb
            const imageFile = { image: data.image[0] };
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (res.data.success) {
                const imageUrl = res.data.data.display_url;

                // Create user with email and password
                await createUser(email, password);
                
                // Update profile with name and image
                await handleUpdateProfile(name, imageUrl);
                
                // Logout and show success message
                await logOut();
                toast.success('User Created Successfully!');
                navigate('/login');
            }
        } catch (error) {
            console.error(error);
            toast.error('Registration failed. Please try again.');
        }
    }
    
    return (
        <div className='min-h-screen relative animate__animated animate__fadeIn'>
            <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${regImg})`, filter: 'blur(5px)' }}
            ></div>
            <div className="relative hero bg-black/40 bg-opacity-70 min-h-screen z-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left text-white px-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community!</h1>
                        <p className="text-xl mb-8 max-w-lg">
                            Register to connect with local farmers, discover fresh produce, 
                            and support sustainable agriculture in your area.
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
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h2>
                            
                            {/* Name Field */}
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-medium">Full Name</span>
                                </label>
                                <input 
                                    type="text" 
                                    name='name' 
                                    placeholder="Your full name" 
                                    className="input input-bordered bg-white border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-lg py-3 px-4"
                                    {...register("name", { required: "Name is required" })} 
                                />
                                {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                            </div>
                            
                            {/* Email Field */}
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-medium">Email</span>
                                </label>
                                <input 
                                    type="email" 
                                    name='email' 
                                    placeholder="your.email@example.com" 
                                    className="input input-bordered bg-white border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-lg py-3 px-4"
                                    {...register("email", { required: "Email is required" })} 
                                />
                                {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                            </div>
                            
                            {/* Password Field */}
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-medium">Password</span>
                                </label>
                                <div className="relative">
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        name="password" 
                                        placeholder="••••••••" 
                                        className="input input-bordered w-full bg-white border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-lg py-3 px-4 pr-12"
                                        {...register("password", { 
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters"
                                            }
                                        })} 
                                    />
                                    <span 
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
                                    </span>
                                </div>
                                {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}
                            </div>
                            
                            {/* Image Upload */}
                            <div className="form-control mb-6">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-medium">Profile Image</span>
                                </label>
                                <input 
                                    type="file" 
                                    name='image' 
                                    className="file-input file-input-bordered w-full bg-white border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-lg py-3 px-4"
                                    {...register("image", { required: "Image is required" })} 
                                />
                                {errors.image && <span className="text-red-500 text-sm mt-1">{errors.image.message}</span>}
                            </div>
                            
                            {/* Submit Button */}
                            <div className="form-control mb-6">
                                <button className="btn bg-green-600 hover:bg-green-700 border-none text-white font-bold py-3 rounded-lg transition-colors duration-300 transform hover:scale-[1.02]">
                                    Register
                                </button>
                            </div>
                            
                            {/* Login Link */}
                            <div className="text-center">
                                <p className="text-gray-600">
                                    Already have an account?{" "}
                                    <Link to='/login' className="text-green-600 font-semibold hover:underline">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;