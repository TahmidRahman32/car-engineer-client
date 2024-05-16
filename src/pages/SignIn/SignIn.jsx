import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import Nav from "../Home/Nav/Nav";
const SignIn = () => {
   const { login, handleGoogle } = useContext(authContext);
   const handleSignInFrom = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const user = { email, password };
      console.log(user);
      login(email, password)
         .then((result) => {
            console.log(result.user);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleGoogleBtn = () => {
      handleGoogle()
         .then((result) => {
            console.log(result.user);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   return (
      <div>
         <Nav></Nav>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content gap-20">
               <div className="text-center lg:text-left">
                  <img src={loginImg} alt="" />
               </div>
               <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-12">
                  <h1 className="text-4xl font-bold text-center">Login now!</h1>
                  <form className="card-body pb-2" onSubmit={handleSignInFrom}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">
                              Forgot password?
                           </a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn bg-primary text-white">Login</button>
                     </div>
                  </form>
                  <div className="text-center">
                     <p>
                        <small className="text-gray-500">Or Sign In with</small>
                     </p>
                     <div className="flex justify-center gap-4 my-3 text-xl">
                        <Link to={"/"} className="text-blue-600">
                           <FaFacebook />
                        </Link>
                        <Link to={"/"} className="text-orange-800">
                           <FaInstagram />
                        </Link>
                        <Link to={""} onClick={handleGoogleBtn}>
                           <FcGoogle />
                        </Link>
                     </div>
                     <div>
                        <p>
                           <small className="text-gray-500">
                              Have an account?{" "}
                              <Link className="text-primary font-bold" to={"/SignUp"}>
                                 SignUp
                              </Link>
                           </small>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignIn;
