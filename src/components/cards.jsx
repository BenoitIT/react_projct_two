import React from "react";
const Cards = (props) => {
    const{image,dates,avenue,theme}=props
  return (
    <div className={theme==='dark'?"bg-gray-900 p-8 text-white items-center":"bg-gray-200 p-8 items-center"}>
      <img
        src={image}
        className="mt-8 rounded-lg sm:w-4/4 md:w-4/4"
      />
      <div className="w-2/4 mt-4 flex flex-row">
        <img src={require("./images/star.PNG")} width="10px" className="pb-8"/>
        <div className="items-start">
          <small className="text-gray-600 md:text-lg">highly rated image</small>
          <br />
          <div className="leading-4 flex flex-row space-x-4">
          <small className="text-black font-bold">{dates}</small>
          <small>pictures</small>
           </div>
           <div className="leading-4 flex flex-row space-x-4">
          <small className="text-gray-600 font-bold">Location:</small>
          <small>{avenue}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
