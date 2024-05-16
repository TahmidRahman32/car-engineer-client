import parson from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
   return (
      <div className="flex gap-28 items-center mb-12">
         <div className="relative">
            <img className="rounded-xl" src={parson} alt="" />

            <img className="absolute -bottom-8 w-80 h-80 -right-16 border-8 rounded-xl border-white" src={parts} alt="" />
         </div>
         <div className="space-y-3">
            <h5 className="font-bold text-xl text-primary">About Us</h5>
            <h1 className="text-4xl font-bold">
               We are qualified & <br /> of experience <br /> in this field
            </h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            <button className="btn bg-primary text-white hover:text-black border-0">Get More Info</button>
         </div>
      </div>
   );
};

export default About;
