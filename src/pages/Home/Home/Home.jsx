import About from "../About/About";
import Contact from "../Contact/Contact";
import Nav from "../Nav/Nav";
import Product from "../Products/Product";

import Banner from "../banner/Banner";
import Service from "../servise/Service";


const Home = () => {
   return (
      <div>
         <Nav></Nav>
         <Banner></Banner>
         <About></About>
         <Service></Service>
         <Contact></Contact>
         <Product></Product>
      </div>
   );
};

export default Home;