import google from '../../assets/icons/google.png'

const SocialMedia = () => {

    const handelGoogleLogin = () =>{

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