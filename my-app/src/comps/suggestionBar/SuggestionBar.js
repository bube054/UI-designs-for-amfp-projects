import React from 'react'
import ForumButton from '../forumButton/ForumButton'
import {IconPhoto, IconSend} from "@tabler/icons-react"

const SuggestionBar = () => {
  return (
    <div id="suggestion-bar" className='space-y-2 border border-gray-400 absolute bottom-0 left-0 w-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-2 bg-white'>
      <div className=''>
        <input className="border-2 border-gray-400 text-gray-400 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 focus:ring-0 outline-none block w-full p-2.5 " placeholder="Type suggestion"/>
      </div>
      <div className='flex items-center justify-end space-x-2'>
        <ForumButton color="gray" className="px-3 py-2 text-xs bg-opacity-50" label="Cancel"/>
        <ForumButton color="blue" className="px-3 py-2 text-xs" label="Add Image"><IconPhoto className='w-4 h-4 inline'/></ForumButton>
        <ForumButton color="green" className="px-3 py-2 text-xs" label="Suggest"><IconSend className='w-4 h-4 inline'/></ForumButton>
      </div>
    </div>
  )
}

export default SuggestionBar