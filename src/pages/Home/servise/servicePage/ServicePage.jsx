
import CheckOutBanner from "../../Sheard/CheckOutBanner/CheckOutBanner";
import Nav from "../Home/Nav/Nav";
const ServicePage = () => {

   
   return (
      <div>
         <Nav></Nav>
         <CheckOutBanner></CheckOutBanner>

         <div className="bg-gray-200 pt-16 h-[500px] gap-8 my-8 rounded-xl">
            <form>
               <div className=" justify-center flex">
                  <div className="">
                     <input className="px-3 py-2 rounded-lg w-96 mb-8" type="text" name="FirstName" id="" placeholder="First Name" /> <br />
                     <input className="px-3 py-2 rounded-lg w-96 mr-4" type="tel" name="YourPhone" id="" placeholder="Your Phone" /> <br />
                  </div>
                  <div className=" ">
                     <input className="px-3 py-2 rounded-lg w-96 mb-8" type="text" name="LastName" id="" placeholder="Last Name" /> <br />
                     <input className="px-3 py-2 rounded-lg w-96" type="email" name="email" id="" placeholder="Your Email" />
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

export default ServicePage;