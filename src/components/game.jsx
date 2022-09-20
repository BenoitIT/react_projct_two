import React from "react";
import Confetti from 'react-confetti'
const Nums = ({ dice, onRoll, onRolling,tenz }) => {
  const diceDisplay = dice.map((die) => (
    <div
      className={
        die.isHeld
          ? " text-white rounded-lg shadow-md w-11 h-11 my-2 mx-2 flex items-center justify-center bg-slate-900"
          : "bg-white text-black rounded-lg shadow-md w-11 h-11 my-2 mx-2 flex items-center justify-center  hover:bg-slate-900 hover:text-white hover:cursor-pointer"
      }
      key={die.id}
      onClick={() => onRoll(die.id)}
    >
      {die.value}
    </div>
  ));
  return (
    <div className=" bg-gray-500 shadow-lg rounded py-3">
      {tenz ?<Confetti/> : null}
      <div className="text-gray-900 text-medium mx-10 my-10 w-3/4 rounded-lg p-4 bg-gray-400">{tenz? "you arleady win the game!" : "keep enjoying the game dear freind"}</div>
      <div className="grid grid-cols-5 gap-y-2gap-x-2">{diceDisplay}</div>
      <button
        className="bg-gray-700 font-bold text-white mx-20 w-2/4 rounded-lg py-2 hover:bg-slate-900 shodow-md flex items-center justify-center"
        onClick={onRolling}
      >
        {tenz? "New game" : "roll"}
      </button>
    </div>
  );
};

export default Nums;
