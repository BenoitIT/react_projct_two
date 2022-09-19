import React from 'react';
import './App.css';
import Post from './components/home';
import NavBar from './components/navBar';
import Cards from './components/cards';
import Data  from './components/dataFormat';


function App() {
const[dark,setDark]=React.useState("dark")
console.log(dark)
const onChangeTheme=()=>{
  let mode
  if(dark==='dark')
  mode='light'
  else
  mode='dark'
setDark(prevdark=>prevdark=mode)
}
  return (
    <div className="bg-gray-800">
      <div className='sticky top-0'>
      <NavBar onChangeTheme={onChangeTheme} theme={dark}/>
      </div>

     <div className={dark==='dark'?"bg-gray-900 p-8 items-center ml-20 mr-20":"bg-gray-200 p-8 items-center ml-20 mr-20"}>
     <Post theme={dark}/>
     <div className='flex md:flex-row ml-20 w-2/4 sm:flex-col items-center'>
     <Cards image={require("./components/images/Capture1.PNG")} dates="2022/2023" avenue="kigali..." theme={dark}/>
     <Cards image={require("./components/images/Capture2.PNG")} dates="2022/2023" avenue="butare..." theme={dark}/>
     <Cards image={require("./components/images/Capture3.PNG")} dates="2022/2023" avenue="karaongi..." theme={dark}/>
    </div>
    <Data theme={dark}/>
    </div>
    </div>
  );
}

export default App;
