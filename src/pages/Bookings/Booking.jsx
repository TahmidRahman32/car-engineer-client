

const Booking = ({ booking, handleDeleteBtn,handleUpdateBtn  }) => {
   // console.log(booking);
   const { customerName, price, date, img, _id, status } = booking;

   return (
      <tr className="flex justify-between mt-16">
         <th>
            <button onClick={() => handleDeleteBtn(_id)} className="btn btn-circle btn-sm btn-outline">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
               </svg>
            </button>
         </th>

         <td>
            <div className="flex items-center justify-center gap-3">
               <div className=" w-44 h-10">
                  <div className="  w-36 h-16">
                     <img className="rounded-2xl" src={img} alt="Avatar Tailwind CSS Component" />
                  </div>
               </div>
               <div>
                  <div className="font-bold">{customerName}</div>
                  <div className="text-sm opacity-50">United States</div>
               </div>
            </div>
         </td>
         <td>
            <h2 className="font-bold">${price}</h2>
            <br />
            {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
         </td>
         <td className="font-bold">{date}</td>
         <th>
            {status === "Pending" ? (
               <span> Confirm </span>
            ) : (
               <button onClick={() => handleUpdateBtn(_id)} className=" px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-700">
                  Pending
               </button>
            )}
         </th>
      </tr>
   );
};

export default Booking;
