import React from 'react'
import {IconHash} from "@tabler/icons-react"

const ForumTags = () => {
  return (
    <div className={`flex items-center space-x-2`}>
    <div className={`flex-shrink-0`}>
      {/* <img class="w-10 h-10 rounded-full object-cover" src={image} alt={`Technician profile pic`}/> */}
      <div className={`inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-md uppercase`}>
        <IconHash className='w-5 h-5 text-gray-400'/>
        {/* <span className={`font-medium text-gray-600 text-sm`}>AG</span> */}
      </div>
    </div>
    <div className={`flex-1 min-w-0`}>
      <p className={`text-sm text-main font-semibold truncate capitalize`}>
        #javascript
      </p>
      <p className={`text-xs text-ash truncate`}>65,523 Posted • Trending</p>
    </div>
  </div>
  )
}

export default ForumTags