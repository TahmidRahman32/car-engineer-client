import product1 from "../../../assets/images/products/1.png";
import product2 from "../../../assets/images/products/2.png";
import product3 from "../../../assets/images/products/3.png";
import product4 from "../../../assets/images/products/4.png";
import product5 from "../../../assets/images/products/5.png";
import product6 from "../../../assets/images/products/6.png";
import { GoStarFill } from "react-icons/go";
const Product = () => {
   return (
      <div className="my-16">
         <div className="text-center my-8 space-y-2">
            <h5 className="text-primary font-bold text-xl">Popular Products</h5>
            <h1 className="text-4xl font-bold">Browse Our Products</h1>
            <p className="px-96">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
         </div>
         <div className="grid grid-cols-3">
            <div className="card w-96 bg-base-100 shadow-xl px-5 py-2">
               <figure className="px-10 pt-10 bg-gray-200 rounded-lg">
                  <img src={product1} alt="Shoes" className="rounded-xl h-64" />
               </figure>
               <div className="card-body items-center text-center">
                  <div className="flex text-amber-500 text-xl ">
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                  </div>
                  <h2 className="card-title font-bold">Car Engine Plug</h2>
                  <p className="text-xl font-bold text-primary">$20.00</p>
               </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl px-5 py-2">
               <figure className="px-10 pt-10 bg-gray-200 rounded-lg">
                  <img src={product3} alt="Shoes" className="rounded-xl h-64" />
               </figure>
               <div className="card-body items-center text-center">
                  <div className="flex text-amber-500 text-xl ">
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                  </div>
                  <h2 className="card-title font-bold">Car Air Filter</h2>
                  <p className="text-xl font-bold text-primary">$20.00</p>
               </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl px-5 py-2">
               <figure className="px-10 pt-10 bg-gray-200 rounded-lg">
                  <img src={product2} alt="Shoes" className="rounded-xl h-64" />
               </figure>
               <div className="card-body items-center text-center">
                  <div className="flex text-amber-500 text-xl ">
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                  </div>
                  <h2 className="card-title font-bold">Cools Led Light</h2>
                  <p className="text-xl font-bold text-primary">$20.00</p>
               </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl px-5 py-2">
               <figure className="px-10 pt-10 bg-gray-200 rounded-lg">
                  <img src={product4} alt="Shoes" className="rounded-xl h-64" />
               </figure>
               <div className="card-body items-center text-center">
                  <div className="flex text-amber-500 text-xl ">
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                  </div>
                  <h2 className="card-title font-bold">Cools Led Light</h2>
                  <p className="text-xl font-bold text-primary">$20.00</p>
               </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl px-5 py-2">
               <figure className="px-10 pt-10 bg-gray-200 rounded-lg">
                  <img src={product5} alt="Shoes" className="rounded-xl h-64" />
               </figure>
               <div className="card-body items-center text-center">
                  <div className="flex text-amber-500 text-xl ">
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                  </div>
                  <h2 className="card-title font-bold">Cools Led Light</h2>
                  <p className="text-xl font-bold text-primary">$20.00</p>
               </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl px-5 py-2">
               <figure className="px-10 pt-10 bg-gray-200 rounded-lg">
                  <img src={product6} alt="Shoes" className="rounded-xl h-64" />
               </figure>
               <div className="card-body items-center text-center">
                  <div className="flex text-amber-500 text-xl ">
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                     <GoStarFill />
                  </div>
                  <h2 className="card-title font-bold">Cools Led Light</h2>
                  <p className="text-xl font-bold text-primary">$20.00</p>
               </div>
            </div>
         </div>
         <div className="text-center mt-8 mb-16">
            <button className="btn btn-outline text-primary text-xl">More Products</button>
         </div>
      </div>
   );
};

export default Product;
