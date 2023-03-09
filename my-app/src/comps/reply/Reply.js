import React, {useEffect, useState, useRef} from 'react'
import { IconDotsVertical, IconEye, IconMessage, IconThumbUp, IconThumbDown, IconThumbUpFilled, IconThumbDownFilled, IconChevronsUp, IconArrowBackUp} from '@tabler/icons-react';
import SubReply from '../subReply/SubReply';

const Reply = () => {
  const [showEditOrDelete, setShowEditOrDelete] = useState(false)
  const postComponent = useRef()
  useEffect(() => {
    postComponent.current.addEventListener("click", (e) => {
      if(!e.target.closest("#edit-delete-reply-component") && !showEditOrDelete){
        console.log(`entered`);
        setShowEditOrDelete(false)
        return
      }
      // console.log(`next page please`);
    })
  }, [])

  const [showSubReplies, setShowSubReplies] = useState(false)

  return (
  <div className='space-y-2'>
  <div id='reply-component' ref={postComponent} className='border bg-white border-gray-400 border-l-4 border-l-main font-title p-3 space-y-2'>          
    <div className='flex items-center justify-between'>
      <div className=''>
        <div className={`flex items-center space-x-2`}>
          <div className={`flex-shrink-0`}>
            {/* <img class="w-10 h-10 rounded-full object-cover" src={image} alt={`Technician profile pic`}/> */}
            <div className={`inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full uppercase`}>
              <span className={`font-medium text-gray-600 text-sm`}>AG</span>
            </div>
          </div>
          <div className={`flex-1 min-w-0`}>
            <p className={`text-sm font-semibold text-black truncate capitalize`}>
              {/* {technician.first_name || "—"} {technician.last_name || "—"} */} Attah Gbubemi
            </p>
            <p className={`text-xs text-ash truncate`}>5 mins ago</p>
          </div>
        </div>
      </div>
      <div className='relative flex items-center justify-end'>
        <ul id='edit-delete-reply-component' className={`${showEditOrDelete ? "" : "hidden"} shadow-md absolute bg-light text-main space-y-1 text-center top-0 right-0 z-10 rounded-b-lg divide-y divide-main`}>
          <li className='px-1.5'>Edit</li>
          <li className='px-1.5'>Delete</li>
        </ul>
        <IconDotsVertical onClick={() => setShowEditOrDelete(pv => !pv)} className='w-5 h-5 cursor-pointer'/>
      </div>
    </div>
    <div className='text-sm space-y-1'>
      <p className='font-semibold'>How to turn $5000 to $10000?</p>
      <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla bala bulu</p>
    </div>
    <div className='flex items-center justify-between'>
      <div className='flex items-center justify-between space-x-1'>
        <span className='flex items-center justify-center space-x-0.5 text-sm text-main'> <IconThumbUpFilled className='w-5 h-5 inline cursor-pointer'/> <span className=''>155</span> </span>
        <span className='flex items-center justify-center space-x-0.5 text-sm text-main'> <IconThumbDownFilled className='w-5 h-5 inline cursor-pointer'/> <span className=''>155</span> </span>
        {/* <span className='flex items-center justify-center space-x-0.5 text-sm text-main'> <IconThumbUp className='w-5 h-5 inline cursor-pointer'/> <span className=''>155</span> </span>
        <span className='flex items-center justify-center space-x-0.5 text-sm text-main'> <IconThumbDown className='w-5 h-5 inline cursor-pointer'/> <span className=''>155</span> </span> */}
      </div>
    <div className='flex items-center justify-between space-x-2'>
      <span onClick={() => setShowSubReplies(pv => !pv)} className='flex items-center justify-center space-x-0.5 cursor-pointer hover:underline text-xs text-blue-500'> <IconChevronsUp className={`w-4 h-4 inline ${!showSubReplies ? "rotate-180" : ""}`}/>
      {showSubReplies ? "Hide" : "Show"} All Replies (2) 
      </span>
      <span className='flex items-center justify-center space-x-0.5 cursor-pointer hover:underline text-xs text-blue-500'> <IconArrowBackUp className='w-4 h-4 inline'/>Reply</span>
    </div>
    </div>
  </div>
  {
    showSubReplies &&
  <div className='space-y-1 p-0.5'>
    <SubReply/>
    <SubReply/>
    <SubReply/>
  </div>
  }
  </div>

  )

}

export default Reply