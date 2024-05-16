

const CheckOutBanner = () => {
   return (
      <div>
         <div className="carousel-item relative w-full bg-checkOutImg bg-cover h-[200px] rounded-xl my-8">
            <div className="absolute flex items-center left-0 right-0 h-full bg-gradient-to-r from-[#000000cc] to-[#00000033] rounded-xl">
               <h2 className="font-bold text-white text-3xl pl-16 inter">CheckOut</h2>
            </div>
         </div>

      </div>
   );
};

export default CheckOutBanner;