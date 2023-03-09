import React, {useEffect, useState} from 'react'
import {IconChevronDown} from "@tabler/icons-react"
import ForumButton from '../forumButton/ForumButton'
import {IconPhoto, IconSend} from "@tabler/icons-react"

const PostForm = () => {
  const [showCategories, setShowCategories] = useState(false)

  useEffect(() => {
    document.body.querySelector("#make-post-form").addEventListener("click", (e) => {
      if(!e.target.closest("#make-post-category-drop-down-button") && !showCategories && !e.target.closest("#make-post-category-drop-down")) setShowCategories(false)
    })
  }, [])

  return (
    <div id="make-post-form" className='space-y-4'>
      <div className='relative duration-1000 ease-linear'>
        <button id="make-post-category-drop-down-button" onClick={() => setShowCategories(pv => !pv)} className="w-full text-gray-400 border-2 border-gray-400 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center justify-between" type="button">
          <span className=''>Choose Category</span>
          <span> <IconChevronDown className={`${showCategories ? "rotate-180" : ""}`}/> </span>
        </button>
        <div id="make-post-category-drop-down" className={`w-full z-10 ${showCategories ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-md absolute left-0 top-14 border-2 border-gray-400`}>
          <ul className="py-2 text-sm text-gray-700 overflow-y-auto max-h-44 divide-y">
            <li>
              <a href="#f6f" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
            </li>
            <li>
              <a href="#f6f" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
            </li>
            <li>
              <a href="#f6f" className="block px-4 py-2 hover:bg-gray-100">Earnings</a>
            </li>
            <li>
              <a href="#f6f" className="block px-4 py-2 hover:bg-gray-100">Sign out</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=''>
        <input className="border-2 border-gray-400 text-gray-400 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 focus:ring-0 outline-none block w-full p-2.5 " placeholder="Type eye catching title"/>
      </div> 
      <textarea rows="4" className="min-h-[200px] block p-2.5 w-full text-sm text-gray-900 rounded-lg border-2 border-gray-400 focus:ring-gray-500 focus:border-gray-500 focus:ring-0 outline-none resize-none" placeholder="Topic details/comment"></textarea>
      {/* <p className='text-gray-400 text-sm'>Image.png is selected</p> */}
      <div className='flex items-center justify-between'>
        <div className=''>
          <ForumButton color="blue" className="px-3 py-2 text-xs" label="Add Image"><IconPhoto className='w-4 h-4 inline'/></ForumButton>
        </div>
        <div className='flex items-center justify-between space-x-2'>
          <ForumButton color="gray" className="px-3 py-2 text-xs bg-opacity-50" label="Save as draft"/>
          <ForumButton color="green" className="px-3 py-2 text-xs" label="Publish"><IconSend className='w-4 h-4 inline'/></ForumButton>
        </div>
      </div>
    </div>
  )
}

export default PostForm