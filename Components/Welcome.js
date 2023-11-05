"use client";
import React from "react";
const Welcome = () => {
  return (

     <div id="Home" className="flex w-full justify-center items-center">
       <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 ">
         <div className="flex flex-1 sm:justify-start md:justify-start lg:justify-start flex-col md: mr-10 ">
           <h1 className="text-3x1 sm:text-5x1 sm:text-center text-white text-grandient py-1 ">
             Hello Im Ali Akkuş  &rsquo; 
           </h1>
           <p className=" mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
           Frontend Developer and Web Designer
             for 4 Years I Do My Job With Love I Share My Projects And Ideas Here
           </p>
         </div>
       </div>
     </div>
  );
};

export default Welcome;
