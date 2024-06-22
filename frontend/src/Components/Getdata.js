import axios from 'axios';
import React, { useState } from 'react';
const GetData=()=>{
const [getdata,setgetdata ]=useState([]);
const [Loadingdata, setLoadingdata] = useState(false);
const [rendomNumber,setrendomNumber]=useState()

const getdataonclick=async()=>{
      setLoadingdata(true);
      const RN = Math.floor(Math.random() * 10+1);
      setrendomNumber(RN)
      await axios
        .get(`https://jsonplaceholder.typicode.com/posts/${RN}/comments`)
        .then(res =>{setgetdata(res.data)
            //  console.log(res.data)
            setLoadingdata(false);
        } )
        .catch(err => console.error(err));
}
const mydata=getdata.map((e,i=1)=>{
return(<>
  <tr className="hover:bg-gray-100">
    <td className="border px-8 py-4">{i+1}</td>
    <td className="border px-8 py-4">{e.body}</td>
    <td className="border px-8 py-4">{e.email}</td>
  </tr>
</>)
})

return(<>

<div className="h-full flex flex-col items-center justify-center p-3 lato-regular-italic">
<div onClick={getdataonclick} className="w-full h-40 flex items-center justify-center cursor-pointer">
  <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full" />
    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-green-400"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </span>
    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-green-400"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </span>
    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
    Generate Random Post ID and Fetch Data
    </span>
  </div>
</div>
  {rendomNumber && <h1 className='text-xl'>Generated ID: {rendomNumber}</h1>}
  {Loadingdata && <div class="text-center">
  <div
    className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"
  ></div>
  <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
  <p className="text-zinc-600 dark:text-zinc-400">
  Loading comments...
  </p>
</div>
}
{rendomNumber ? <>
<table className="shadow-lg bg-white border-collapse">
<tr>
    <th className="bg-blue-100 border text-left px-8 py-4">S.No.</th>
    <th className="bg-blue-100 border text-left px-8 py-4">Comment</th>
    <th className="bg-blue-100 border text-left px-8 py-4">Email</th>
  </tr>
 {mydata}
</table></> : <>Click Upper Side Button and Get Posts..<img className="" alt="comeing" src="https://i.pinimg.com/originals/cb/48/96/cb4896298bbaee9e8362486117b168cc.gif" />
</>}
</div>
</>)

}

export default GetData;