import React from "react";
import "./App.css";
import Post from "./components/home";
import NavBar from "./components/navBar";
import Cards from "./components/cards";
import Data from "./components/dataFormat";
import Nums from "./components/game";
import { nanoid } from "nanoid";

function App() {
  const [dark, setDark] = React.useState("dark");
  const [nums, setNums] = React.useState(generateNums());
  const [tens,setTens]=React.useState(false)
  function generateNums() {
    const numsArr = [];
    for (let i = 1; i <= 10; i++) {
      numsArr.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }
    return numsArr;
  }
  const chooseDice = (id) => {
    setNums((prevNum) =>
      prevNum.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };
  const rolls = () => {
    setNums((prevNum) =>
      prevNum.map((die) => {
        return die.isHeld
          ? die
          : {
              id: nanoid(),
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
            };
      })
    );
  };
  React.useEffect(()=>{
  const allHeld=nums.every(die=>die.isHeld)
  const firstNum=nums[0].value
  const allNums=nums.every(die=>die.value===firstNum)
  if(allHeld & allNums){
    setTens(true)
  }
  },[nums])
  const onChangeTheme = () => {
    let mode;
    if (dark === "dark") mode = "light";
    else mode = "dark";
    setDark((prevdark) => (prevdark = mode));
  };
  return (
    <div className="bg-gray-800">
      <div className="sticky top-0">
        <NavBar onChangeTheme={onChangeTheme} theme={dark} />
      </div>

      <div
        className={
          dark === "dark"
            ? "bg-gray-900 p-8 items-center ml-20 mr-20"
            : "bg-gray-200 p-8 items-center ml-20 mr-20"
        }
      >
        <Post theme={dark} />
        <div className="flex md:flex-row ml-20 w-2/4 sm:flex-col items-center">
          <Cards
            image={require("./components/images/Capture1.PNG")}
            dates="2022/2023"
            avenue="kigali..."
            theme={dark}
          />
          <Cards
            image={require("./components/images/Capture2.PNG")}
            dates="2022/2023"
            avenue="butare..."
            theme={dark}
          />
          <Cards
            image={require("./components/images/Capture3.PNG")}
            dates="2022/2023"
            avenue="karaongi..."
            theme={dark}
          />
        </div>
        <Data theme={dark} />
        <div className="w-3/4 px-20 ">
          <Nums dice={nums} onRoll={chooseDice} onRolling={rolls} tenz={tens}/>
        </div>
      </div>
    </div>
  );
}

export default App;
