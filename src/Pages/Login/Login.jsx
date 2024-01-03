import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {

 
    const [disabled, setDisabled] = useState(true)

    const{signIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const location= useLocation()


    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Logged In Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from,{replace:true})
        })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }

    }



    return (
        <>
        <Helmet>
                <title>Bistro | Login</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name="password"
                                placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label>
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptcha} type="text"
                              
                                name="captcha"
                                placeholder="Enter the Above captcha" className="input input-bordered" required />
                            
                        </div>
                        <div className="text-center">
                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center pb-3'><small>New Here? <Link className='text-red-600' to='/signUp'>Create an Account</Link></small></p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;