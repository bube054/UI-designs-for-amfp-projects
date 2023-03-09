import React from 'react'
import ForumButton from '../forumButton/ForumButton'
import ForumTags from '../forumTag/ForumTags'

const AsideBar = () => {
  return (
    <div className='p-2'>
      <div className='space-y-3'>
        <ForumButton color="green" className="px-5 py-3 text-base" label="Make a post"/>
        <p className='font-semibold text-lg text-main capitalize'>My Posts</p>
        <p className='font-semibold text-lg text-main capitalize'>Popular Tags</p>
        <div className='space-y-1'>
          <ForumTags/>
          <ForumTags/>
          <ForumTags/>
          <ForumTags/>
          <ForumTags/>
        </div>
        <div className='space-y-1'>
          <div className={`flex items-center space-x-2 bg-light p-2 rounded-md`}>
            <div className={`flex-shrink-0`}>
              {/* <img class="w-10 h-10 rounded-full object-cover" src={image} alt={`Technician profile pic`}/> */}
              <div className={`inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-md uppercase`}>
                {/* <IconHash className='w-5 h-5 text-gray-400'/> */}
                <span className={`font-medium text-gray-600 text-sm`}>AG</span>
              </div>
            </div>
            <div className={`flex-1 min-w-0`}>
              <p className={`text-sm text-main font-semibold truncate capitalize`}>
              Newest and Recent
              </p>
              <p className={`text-xs text-ash truncate`}>Find the latest update</p>
            </div>
          </div>
          <div className={`flex items-center space-x-2 bg-light p-2 rounded-md`}>
            <div className={`flex-shrink-0`}>
              {/* <img class="w-10 h-10 rounded-full object-cover" src={image} alt={`Technician profile pic`}/> */}
              <div className={`inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-md uppercase`}>
                {/* <IconHash className='w-5 h-5 text-gray-400'/> */}
                <span className={`font-medium text-gray-600 text-sm`}>AG</span>
              </div>
            </div>
            <div className={`flex-1 min-w-0`}>
              <p className={`text-sm text-main font-semibold truncate capitalize`}>
              Popular of the day
              </p>
              <p className={`text-xs text-ash truncate`}>Shots featured today by texhnicians</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AsideBar