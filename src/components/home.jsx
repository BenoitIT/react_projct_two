import React from "react";
import Form from './form'
const Post = ({theme}) => {
  const[title,setTitile]=React.useState("online experience")
  const changetitile =()=>{
   setTitile(prevtitle=>prevtitle='we can buy more from internet')
  }


  return (

    <div className={theme==='dark'?"bg-gray-900 mx-0":"bg-gray-200 mx-0"}>
      <Form/>
       <main className="px-8 flex flex-col  space-y-6 items-center text-left">

     <img alt="img" src={require('./images/image.JPG')} className="w-2/4 box-shodow-2xl"/>
     <h1 className="font-bold text-2xl mt-2 ml-2" onClick={changetitile}>  Online experience</h1>
    <small className="text-gray-400 leading-tight w-4/4 ms:text-sm md:text-lg">Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document  When you work on a table, click where you want to add a row or a column, and then click the plus sign </small>
      <span className="text-base text-gray-400">{title}</span>
      </main>
    </div>

  );
};
export default Post;
