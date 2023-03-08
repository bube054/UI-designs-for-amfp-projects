import React, { useState } from 'react';
import Post from './comps/Post';
// import "./leaflet.css"
// import { MapContainer, TileLayer, useMap , Marker, Popup} from 'react-leaflet'

function App() {
  return (
  <div className='border border-red-500 flex min-h-screen font-title'>
    <aside className='flex-[20%] border border-red-500'></aside>
    <main className='flex-[80%] border border-red-500 flex p-4 gap-4'>
      <div className='flex-[80%] border border-blue-500 space-y-2'>
        <Post/>
      </div>
      <div className='flex-[20%] border border-blue-500'></div>
    </main>
  </div>
);
}

export default App;