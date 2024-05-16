import { ImLocation } from "react-icons/im";
import { MdDateRange } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa";

const Contact = () => {
   return (
      <div className="bg-black text-white px-16 py-20 rounded-xl my-8 flex justify-between gap-6">
         <div className="flex gap-2 items-center">
            <div className="relative">
               <span className="text-5xl">
                  <MdDateRange />
               </span>
               <span className="absolute bottom-2 -right-0 text-xl text-primary bg-white rounded-full border-0">
                  <IoIosTime />
               </span>
            </div>
            <div>
               <p className="inter">Have a question?</p>
               <h3 className="text-xl font-bold inter">+2546 251 2658</h3>
            </div>
         </div>
         <div className="flex gap-4 items-center">
            <div className="relative">
               <span className="text-4xl">
                  <FaPhone />
               </span>
               <span className="absolute bottom-4 -right-2 text-2xl text-primary rounded-full border-0">
                  <FaCommentDots />
               </span>
            </div>
            <div>
               <p className="inter">We are open monday-friday</p>
               <h3 className="text-xl font-bold inter">7:00 am - 9:00 pm</h3>
            </div>
         </div>
         <div className="flex gap-2 items-center">
            <div className="relative">
               <span className="text-3xl text-primary z-50">
                  <ImLocation />
               </span>
            </div>
            <div>
               <p className="inter">Need a repair? our address</p>
               <h3 className="text-xl font-bold inter">Liza Street, New York</h3>
            </div>
         </div>
      </div>
   );
};

export default Contact;
