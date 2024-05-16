import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ServicesCard = ({ card }) => {
   
   const { title, img, price, _id } = card;
   return (
      <div className="border px-4 py-2 rounded-lg space-y-2">
         <img className="rounded-xl h-56" src={img} alt="" />

         <h2 className="text-2xl font-bold">{title}</h2>
         <div className="flex items-center justify-between">
            <div>
               <h5 className="text-primary text-xl font-bold">Price: ${price}</h5>
            </div>
            <div className="text-primary">
               <Link to={`/checkOut/${_id}`}>
                  <FaArrowRight />
               </Link>
            </div>
         </div>
      </div>
   );
};
ServicesCard.prototype = {
   card: PropTypes.object,
};

export default ServicesCard;
