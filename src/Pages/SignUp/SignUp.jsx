import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { FaArrowAltCircleLeft } from "react-icons/fa";


const SignUp = () => {
  const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const { createUser, updateUserProfile } = useContext(AuthContext)
const navigate = useNavigate()

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
           //create user entry in the data base
           const userInfo ={
            name: data.name,
            email: data.email
           }
           axiosPublic.post('/users',userInfo)
           .then(res => {
            if(res.data.insertedId){
              console.log('user added to the database');
              reset()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
            }
           })
        
          })
          .catch(error => console.log(error))
      })
  }






  return (
    <>
      <Helmet>
        <title>Bistro | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" {...register("name", { required: true })} name="name" placeholder="email" className="input input-bordered" required />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="name" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" required />
                {errors.PhotoURL && <span>Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/,
                  minLength: 6
                })} name="password" placeholder="password" className="input input-bordered" required />
                {errors.password?.type === 'pattern' && <p className="text-red-400">password must be one upperCase one LowerCase and one special character</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">

                <input className="btn btn-primary" type="submit" value="SignUp" />
              </div>
              <div className='text-center'>
                       <p>Or</p>
                       <hr />
                        <p className='mt-3'>Continue With Google</p>
                       </div>
                        <SocialLogin ></SocialLogin>
            </form>
            <Link className="text-orange-400  items-center flex justify-center" to='/'><FaArrowAltCircleLeft></FaArrowAltCircleLeft> Back to Home</Link>
            <p className='text-center pb-3'><small> Already SignUp?<Link className='text-red-600' to='/login'> Login Now</Link></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;