import React from 'react';
const Form = () => {
    const[formData,setFormData]=React.useState({
        firstName:"",
        lastName:"",
        isMarried:false,
        employment:"",
        favColor:""
    })
    const handleChange=(event)=>{
        const{name,value,type,checked}=event.target
      setFormData(prevData=>{
        return{
        ...prevData,
        [name]:type==="checkbox" ? checked:value
        }
      })
    }
    fetch("https://ehealthbackend-project.herokuapp.com/api/health/blogs")
    .then(res=>res.json()).then(data=>console.log(data));
    const handleSubmit=(event)=>{
      event.preventDefault()
    console.log(formData)
  }
    return (

        <form onSubmit={handleSubmit} className='flex flex-col space-y-2 p-4 items-center'>
            <h1 className='text-2xl text-gray-600 font-bold'>SAMPLE FORM</h1>
          <label forhtml="firstName" className='text-lg text-gray-400 font-medium'>first name</label>
        <input
        type="text"
        placeholder="first name"
        name="firstName"
        id="firstName"
        onChange={handleChange}
        value={formData.firstName}
        className="border rounded-lg w-2/4 py-2 px-4 focus:outline-none focus:ring focus:ring-violet-300 "
        />
        <label forhtml="lastName" className='text-lg text-gray-400 font-medium'>first name</label>
       <input
        type="text"
        placeholder="last name"
        name="lastName"
        id="lastName"
        onChange={handleChange}
        value={formData.lastName}
        className="border rounded-lg w-2/4 py-2 px-4 focus:outline-none focus:ring focus:ring-violet-300 "
        />
        <div>
         <input
        type="checkbox"
        checked={formData.isMarried}
        id="isMarried"
        name="isMarried"
        className="w-4 h-4 px-2 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={handleChange}
        /><label htmlFor='isMarried' className='text-lg text-gray-400 font-medium'>is married</label>
        </div>
        <div>
          <input
        type="radio"
        id="part-time"
        name="employment"
        value="part-time"
        checked={formData.employment==="part-time"}
        onChange={handleChange}
        /><label htmlFor='part-time' className='text-lg text-gray-400 font-medium'>part-time</label>
        </div>
        <div>
        <input
        type="radio"
        id="full-time"
        name="employment"
        value="full-time"
        checked={formData.employment==="full-time"}
        onChange={handleChange}
        /><label htmlFor='full-time' className='text-lg text-gray-400 font-medium'>full-time</label>
        </div>
        <div>
        <label htmlFor="favColor" className='text-lg text-gray-400 font-medium'>What is your favorite color?</label>
            <br />
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
                className="border rounded-lg w-3/4 py-2 px-4 focus:outline-none focus:ring focus:ring-violet-300 "
            >
                <option value="" className='text-sm text-gray-400 font-medium'>-- Choose --</option>
                <option value="red" className='text-sm text-gray-400 font-medium'>Red</option>
                <option value="orange" className='text-sm text-gray-400 font-medium'>Orange</option>
                <option value="yellow" className='text-sm text-gray-400 font-medium'>Yellow</option>
                <option value="green" className='text-sm text-gray-400 font-medium'>Green</option>
                <option value="blue" className='text-sm text-gray-400 font-medium'>Blue</option>
                <option value="indigo" className='text-sm text-gray-400 font-medium'>Indigo</option>
                <option value="violet" className='text-sm text-gray-400 font-medium'>Violet</option>
            </select>
        </div>
        <div>
          <button type="submit" className='bg-gray-700 py-2 px-10 rounded-lg hover:bg-gray-400 text-white text-sm'>save</button>
        </div>
        </form>
    );
}

export default Form;