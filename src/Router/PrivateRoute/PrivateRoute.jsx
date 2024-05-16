import { useContext } from "react";
import { authContext } from "../../pages/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { users, loading } = useContext(authContext);

   const location = useLocation();
   // console.log(location.pathname);
   if(loading){
      return (
         <div className="text-center mt-36">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
         </div>
      );
   }

   if(users?.email){
      return children;
   }
   return <Navigate state={location.pathname} to={"/signIn"} replace></Navigate>;
};

export default PrivateRoute;
