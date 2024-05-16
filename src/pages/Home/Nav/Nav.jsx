import { MdOutlineShoppingBag } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import logo from '../../../assets/icons/logo.eps'
import logo from "../../../assets/icons/Wrench.svg";
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";

const Nav = () => {
   const { users, logOut } = useContext(authContext);
 
 const  handleLogUot =() =>{
     logOut()
     .then(() =>{})
     .catch(error =>{
      console.log(error);
     })
   }
   const navLinks = (
      <>
         <li>
            <Link to={"/"} className="font-bold hover:text-blue-600 hover:underline">
               Home
            </Link>
         </li>
         <li className="font-bold hover:text-blue-600 hover:underline">
            <Link to={"/about"}> About</Link>
         </li>
         <li className="font-bold hover:text-blue-600 hover:underline">
            <a>Services</a>
         </li>
         <li className="font-bold hover:text-blue-600 hover:underline">
            <a> Blog</a>
         </li>
         <li className="font-bold hover:text-blue-600 hover:underline">
            <a> Contact</a>
         </li>
         {users?.email ? (
            <>
               <li className="font-bold hover:text-blue-600 hover:underline">
                  <Link to={"/bookings"}>My Bookings</Link>
               </li>
               <li onClick={handleLogUot} className="font-bold hover:text-blue-600 hover:underline">
                  <Link>Sign Out</Link>
               </li>
            </>
         ) : (
            <li className="font-bold hover:text-blue-600 hover:underline">
               <Link to={"/signIn"}>SignIn</Link>
            </li>
         )}
      </>
   );
   return (
      <div>
         <div className="navbar bg-base-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                     </svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navLinks}
                  </ul>
               </div>
               <div className="text-center">
                  <img className="mx-auto" src={logo} alt="" />
                  <h3 className="text-2xl font-bold">Car Doctor</h3>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>
            <div className="navbar-end">
               <div className="flex items-center gap-6">
                  <p className="text-xl">
                     <IoSearchOutline />
                  </p>
                  <p className="text-xl">
                     <MdOutlineShoppingBag />
                  </p>
                  <Link to={"/"}>
                     <button className="btn text-pryColor">Appointment</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Nav;
