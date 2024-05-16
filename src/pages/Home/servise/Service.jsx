import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard/ServicesCard";

const Service = () => {
   const [services, setService] = useState([]);

   useEffect( ()=>{
       fetch("http://localhost:5000/services")
          .then((res) => res.json())
          .then((data) => setService(data));
   },[])
   return (
      <div>
         <div className="text-center my-8 space-y-2">
            <h5 className="text-primary font-bold text-xl">Service</h5>
            <h1 className="text-3xl font-bold">Our Service Area</h1>
            <p className="px-96">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
         </div>
         <div className="grid grid-cols-3 gap-8">
            {services.map((card) => (
               <ServicesCard key={card._id} card={card}></ServicesCard>
            ))}
         </div>
         <div className="text-center mt-8 mb-16">
            <button className="btn btn-outline text-primary text-xl">More Services</button>
         </div>
      </div>
   );
};

export default Service;
