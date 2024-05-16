/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#FF3811",
         },
         backgroundImage: {
            slider1: "url('/src/assets/images/banner/1.jpg')",
            slider2: "url('/src/assets/images/banner/2.jpg')",
            slider3: "url('/src/assets/images/banner/3.jpg')",
            slider4: "url('/src/assets/images/banner/4.jpg')",
            slider5: "url('/src/assets/images/banner/5.jpg')",
            slider6: "url('/src/assets/images/banner/6.jpg')",
            checkOutImg: "url('/src/assets/images/checkout/checkout.png')",
         },
         
      },
   },
   plugins: [require("daisyui")],
};

