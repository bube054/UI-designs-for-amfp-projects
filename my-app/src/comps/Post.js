import React, {useEffect, useState} from 'react'
import { IconDotsVertical, IconEye, IconMessage, IconThumbUp, IconThumbDown} from '@tabler/icons-react';


const Post = () => {
  const [showEditOrDelete, setShowEditOrDelete] = useState(false)

  useEffect(() => {
    document.body.querySelector("#post-component").addEventListener("click", (e) => {
      // console.log("w4extrcv");
      // if(showEditOrDelete) 
      // console.log({showEditOrDelete});
      if(!e.target.closest("#edit-delete-post-component") && !showEditOrDelete) setShowEditOrDelete(false)
      else if(!e.target.closest("#edit-delete-post-component") && showEditOrDelete) console.log("Next page");
    })
  }, [])

  return (
  <div id='post-component' className='border border-purple-500 rounded-lg font-title p-2 space-y-2'>          
    <div className='flex items-center justify-between'>
      <div className=''>
        <div className={`flex items-center space-x-4`}>
          <div className={`flex-shrink-0`}>
            {/* <img class="w-10 h-10 rounded-full object-cover" src={image} alt={`Technician profile pic`}/> */}
            <div className={`inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full uppercase`}>
              <span className={`font-medium text-gray-600 text-sm`}>AG</span>
            </div>
          </div>
          <div className={`flex-1 min-w-0`}>
            <p className={`text-base font-semibold text-black truncate capitalize`}>
              {/* {technician.first_name || "—"} {technician.last_name || "—"} */} Attah Gbubemi
            </p>
            <p className={`text-sm text-ash truncate`}>5 mins ago</p>
          </div>
        </div>
      </div>
      <div className='border-2 border-orange-500 relative'>
        <ul id='edit-delete-post-component' className={`${showEditOrDelete ? "" : "hidden"} shadow-md absolute bg-light text-main space-y-1 text-center top-0 right-0 z-10 rounded-b-lg divide-y divide-main`}>
          <li className='px-1.5'>Edit</li>
          <li className='px-1.5'>Delete</li>
        </ul>
        <IconDotsVertical onClick={() => setShowEditOrDelete(pv => !pv)} className='w-5 h-5 cursor-pointer'/>
      </div>
    </div>
    <div className='text-base space-y-1'>
      <p className='font-semibold'>How to turn $5000 to $10000?</p>
      <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla bala bulu</p>
    </div>
    <div className='flex items-center justify-between'>
      <div className='flex items-center justify-between space-x-1.5'>
        <span className="inline-block bg-gray-200 text-black text-sm font-medium px-3 py-0.5 truncate rounded-md">Golang</span>
        <span className="inline-block bg-gray-200 text-black text-sm font-medium px-3 py-0.5 truncate rounded-md">Linux</span>
        <span className="inline-block bg-gray-200 text-black text-sm font-medium px-3 py-0.5 truncate rounded-md">Overflow</span>
        <span className="inline-block bg-gray-200 text-black text-sm font-medium px-3 py-0.5 truncate rounded-md">Overflow</span>
      </div>
      <div className='flex items-center justify-between space-x-2'>
        <span className='flex items-center justify-center space-x-0.5 '> <IconEye className='w-5 h-5 inline cursor-pointer'/> <span className=''>125</span> </span>
        <span className='flex items-center justify-center space-x-0.5 '> <IconMessage className='w-5 h-5 inline cursor-pointer'/> <span className=''>15</span> </span>
        <span className='flex items-center justify-center space-x-0.5 text-main'> <IconThumbUp className='w-5 h-5 inline cursor-pointer'/> <span className=''>155</span> </span>
        {/* <span className='text-red-500'> <IconThumbDown className='w-5 h-5 inline'/> 155 </span> */}
      </div>
    </div>
  </div>

  )
}

export default Post