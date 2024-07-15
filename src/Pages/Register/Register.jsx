import { useState } from "react";
import { useForm } from "react-hook-form";
import regImg from '../../assets/loginImg.jpg'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, handleUpdateProfile, logOut } = useAuth();
    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { name, email, password, image } = data;
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            const imageUrl = res.data.data.display_url;

            createUser(email, password)
                .then(res => {
                    handleUpdateProfile(name, imageUrl)
                    logOut()
                    toast.success('User Create Successful')
                    console.log(res.user);
                })
                .catch(error => {
                })
        }

    }
    return (
        <div className='min-h-screen relative'>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${regImg})`, filter: 'blur(10px)' }}></div>
            <div className="relative hero bg-black/20 bg-opacity-70 min-h-screen z-10">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-black/20 w-full lg:w-[400px] shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Your Name" className="input border-none bg-black/10 text-white" {...register("name", { required: true })} />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Your Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input border-none bg-black/10 text-white" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <div className="flex items-center w-full relative">
                                    <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full bg-black/10 text-white" {...register("password", { required: true })} />
                                    <span onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEyeSlash className="absolute top-4 right-2 cursor-pointer text-white"></FaEyeSlash> : <FaEye className="absolute top-4 right-2 cursor-pointer text-white" />}
                                    </span>
                                </div>
                                {errors.password && <span className="text-red-500">This field is required</span>}

                            </div>
                            <div className="form-control">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Your Image</span>
                                    </label>
                                    <input type="file" name='image' placeholder="email" className="file-input file-input-ghost w-full max-w-xs bg-black/10 text-white" {...register("image", { required: true })} />
                                    {errors.image && <span className="text-red-500">This field is required</span>}
                                </div>
                            </div>
                            <div>
                                <p className="text-white">Already have an account? <Link to='/login' className="text-[#1f64ed]">Login</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-green-500 hover:bg-green-500 border-none text-white">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;