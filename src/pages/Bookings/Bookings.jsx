import { useContext, useEffect, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import Nav from "../Home/Nav/Nav";
import CheckOutBanner from "../../Sheard/CheckOutBanner/CheckOutBanner";
import Booking from "./Booking";
import Swal from "sweetalert2";

const Bookings = () => {
   const { users } = useContext(authContext);
   const [bookings, setBookings] = useState([]);
   const url = `http://localhost:5000/booking?email=${users?.email}`;

   useEffect(() => {
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            // console.log(data);
            setBookings(data);
         });
   }, [url]);

   const handleDeleteBtn = (id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/booking/${id}`, {
               method: "DELETE",
            })
               .then((res) => res.json())
               .catch(() => {
                  // console.log(error);
                  Swal.fire({
                     title: "Deleted!",
                     text: "Your file has been deleted.",
                     icon: "success",
                  });
               });
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
         }
      });
   };

   const handleUpdateBtn = id => {
    
       Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Update it!",
       }).then((result) => {
          if (result.isConfirmed) {
             fetch(`http://localhost:5000/booking/${id}`, {
                method: "PATCH",
                headers: {
                   "content-type": "application/json",
                },
                body: JSON.stringify({ status: "Pending" }),
             })
                .then((res) => res.json())
                .then((data) => {
                   console.log(data);
                   if (data.modifiedCount > 0) {
                     const remaining = bookings.filter(boking => boking._id !== id);
                     const updated = bookings.find(booking => booking._id === id);
                     updated.status = 'Pending';
                     const newBooking = [updated, ...remaining]
                     setBookings(newBooking)
                      Swal.fire({
                         title: "Update!",
                         text: "Your file has been updated.",
                         icon: "success",
                      });
                   }
                });

          }
       });
   };
   return (
      <div>
         <Nav></Nav>
         <CheckOutBanner></CheckOutBanner>
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr className="flex justify-between ">
                     {/* <th>
                        <label>
                           <input type="checkbox" className="checkbox" />
                        </label>
                     </th> */}

                     <th className="pl-52">Name</th>
                     <th>Time</th>
                     <th className="mr-8">Date</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody className="">
                  <div>
                     {/* <h2>booking: {bookings.length}</h2> */}
                     {bookings.map((booking) => (
                        <Booking key={booking._id} booking={booking} handleDeleteBtn={handleDeleteBtn} handleUpdateBtn={handleUpdateBtn}></Booking>
                     ))}
                  </div>
                  {/* row 1 */}
               </tbody>
               {/* foot */}
            </table>
         </div>
      </div>
   );
};

export default Bookings;
