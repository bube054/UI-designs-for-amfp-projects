import React, { useState, useRef } from 'react';
import Post from './comps/Post';
import AsideBar from './comps/asideBar/AsideBar';
import PostForm from './comps/postForm/PostForm';
import SuggestionBar from './comps/suggestionBar/SuggestionBar';
// import "./leaflet.css"
// import { MapContainer, TileLayer, useMap , Marker, Popup} from 'react-leaflet'
import Reply from './comps/reply/Reply';

function App() {
  const sugBar = useRef()

  return (
  <div className='flex h-screen font-title'>
    <aside className='flex-[20%]'></aside>
    <main className='flex-[80%] h-full flex p-4 gap-4'>
      <div className='flex-[70%] h-full space-y-2 relative'>
        {/* ONE */}
        {/* {<PostForm/>} */}

        {/* TWO */}
        {/* <div className=''>
          <Post/>
          <Post/>
        </div> */}

        {/* THREE */}
        <div className='space-y-2 h-full max-h-full overflow-y-auto'>
          <div className=''>
            <Post/>
          </div>
          <p className='text-gray-400 text-lg capitalize text-center'>Suggestions</p>
          <div className='space-y-2'>
            <Reply/>
            <Reply/>
          </div>
          <div className='w-full h-44'></div>
          <SuggestionBar/>
        </div>
      </div>
      <div className='flex-[30%]'>
        <AsideBar/>
      </div>
    </main>
  </div>
);
}

export default App;