import { useLoaderData } from "react-router-dom";
import CheckOutBanner from "../../Sheard/CheckOutBanner/CheckOutBanner";
import Nav from "../Home/Nav/Nav";
import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";

const CheckOut = () => {
   const service = useLoaderData();
   const { users} = useContext(authContext);
   
   const { title, img ,price} = service;

   const handleCheckOutForm = (e) => {
      e.preventDefault();

      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const date = form.date.value;
      const user = {
         customerName: name,
         service: title,
         img,
         email,
         date,
         price,
      };
      // console.log(user);
      fetch("http://localhost:5000/booking",{
         method: 'POST',
         headers:{
            'content-type': 'application/json'
         },
         body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>console.log(data))

     
   };
   return (
      <div>
         <Nav></Nav>
         <CheckOutBanner></CheckOutBanner>

         <div className="bg-gray-200 pt-16 h-[500px] gap-8 my-8 rounded-xl">
            <div className="px-8 my-8 text-black  bg-red-400 w-1/4 mx-auto rounded-xl py-2">
               <h2 className="">
                  <span className="font-bold">Service:</span> {title}
               </h2>
               <p>
                  <span className="font-bold">Price:</span> {price}
               </p>
            </div>
            <form onSubmit={handleCheckOutForm}>
               <div className=" justify-center flex">
                  <div>
                     <input className="px-3 py-2 rounded-lg w-96 mb-8" type="text" name="name" id="" placeholder="First Name" /> <br />
                     <input className="px-3 py-2 rounded-lg w-96 mr-4" type="tel" name="YourPhone" id="" placeholder="Your Phone" /> <br />
                  </div>
                  <div className=" ">
                     <input className="px-3 py-2 rounded-lg w-96 mb-8" type="date" name="date" id="" /> <br />
                     <input className="px-3 py-2 rounded-lg w-96" type="email" name="email" id="" placeholder="Your Email" defaultValue={users?.email} />
                  </div>
               </div>
               <div className="flex items-center justify-center mt-6 ">
                  <textarea className="rounded-xl" name="" id="" cols="105" rows="6"></textarea>
               </div>
               <div className="flex items-center justify-center mt-2 mx-[248px]">
                  <input className="bg-primary w-full py-2 text-xl text-white rounded-lg btn" type="submit" value="Order Confirm" />
               </div>
            </form>
         </div>
      </div>
   );
};

export default CheckOut;
