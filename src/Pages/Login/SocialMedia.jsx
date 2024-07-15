import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/icons/google.png'
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { toast } from 'react-toastify';

const SocialMedia = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handelGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate('/')
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                }
            })
    }

    return (
        <div>
            <div>
                <button onClick={handelGoogleLogin} className="btn">
                    <img src={google} alt=""  className='w-4'/>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialMedia;