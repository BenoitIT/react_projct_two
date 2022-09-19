import React from 'react';
const DataCol = (props) => {
    const[words,setWords]=React.useState(["one 1","two 2","three 3"])
    const displayWord=()=>{
     setWords(prewords=>[...prewords,`number ${prewords.length +1}`])
    }
   const addwords=words.map(word=><p key={word}>{word}</p>);
    return (

        <main className="py-8 flex flex-col  space-y-6 items-center  text-left">
            <div  className='text-gray-600 md:items-center text-xl w-2/4'>
            <h1 className='text-black bg-red-200 md:text-center'>{props.title}</h1>
            <h1 className='font-bold text-base md:text-center'>{props.location}</h1>
            <h1 >{props.oogleMapsUrl}</h1>
            <h1 className="md:items-center">{props.startDate}</h1>
            </div>


            <h1 className='text-gray-600 md:items-center text-xl w-2/4 ms:text-sm'>{props.description}</h1>
            <h1>{props.eimageUrl}</h1>
            <div>{addwords}</div>
            <button onClick={displayWord}>view words</button>
        </main>
     );
}

export default DataCol;