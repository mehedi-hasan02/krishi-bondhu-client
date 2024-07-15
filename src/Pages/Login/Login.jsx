import { useForm } from 'react-hook-form';
import loginImg from '../../assets/loginImg.jpg';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocialMedia from './SocialMedia';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        const {email,password} = data;
        signIn(email, password)
                .then(result => {
                    const user = result.user
                    console.log(user);
                    toast('Login Successful')
                    navigate(from, { replace: true })
                })
                .catch((error) => {

                    {
                        toast.error('Invalid Email and Password');
                    }
                })
    }

    return (
        <div className='min-h-screen relative'>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${loginImg})`, filter: 'blur(10px)' }}></div>
            <div className="relative hero bg-black/20 bg-opacity-70 min-h-screen z-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-black/20 w-full lg:w-[350px] shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
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
                                <div>
                                    <p className='text-white'>Do not have an account? <Link to='/register' className='text-[#1f64ed]'>Register</Link></p>
                                </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-green-500 hover:bg-green-500 border-none text-white">Login</button>
                            </div>
                            <p className='divider divider-neutral text-white'>Or</p>
                            <div className='text-center'>
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
