import { useContext } from "react";
import { authContext } from "../../pages/Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { users, loading } = useContext(authContext);
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
   return <Navigate to={'/signIn'} replace></Navigate> ;
};

export default PrivateRoute;
