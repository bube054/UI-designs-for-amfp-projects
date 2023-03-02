import React, { useState } from 'react';
// import "./leaflet.css"
import { IconFile, IconLollipop, IconMapPinFilled, IconPhone, IconMail, IconPencil, IconTrash, IconFolderMinus} from '@tabler/icons-react';
// import { MapContainer, TileLayer, useMap , Marker, Popup} from 'react-leaflet'

function App() {
  return (
  <div className='font-title'>
    <div className='max-w-sm border border-red-500 h-96 space-y-2'>
      <div className='p-2 border border-main rounded-lg space-y-0.5 text-sm'>
        <p className='flex items-center justify-between'>
          <span className='font-semibold underline'>#009</span>
          <span className={`text-purple-500 bg-purple-500 bg-opacity-20 text-xs font-medium px-2 py-1 rounded-full capitalize`}>Accepted</span>
        </p>
        <p className='flex items-center justify-between'>
          <span className=''>Title</span>
          <span className=''>Clear bushes</span>
        </p>
        <p className='flex items-center justify-between'>
          <span className=''>Technician assigned</span>
          <span className='flex items-center space-x-1 justify-between'> 
            {/* <span className='w-7 h-7 inline-flex items-center justify-between bg-gray-100 rounded-full'>
             <span className='text-center'>TA</span>
            </span> */}
          <div className="inline-flex overflow-hidden relative justify-center items-center text-xs w-7 h-7 bg-gray-100 rounded-full">
              <span className="font-medium text-gray-600">TA</span> 
          </div>
          <span>Timeyin Attah</span> 
          </span>
        </p>
        <p className='flex items-center justify-between'>
          <span className=''>Status</span>
          <span className={`text-waiting_for_acceptance bg-waiting_for_acceptance bg-opacity-20 text-xs font-medium px-2 py-1 rounded-full capitalize`}>Waiting For Acceptance</span>
        </p>
        <div className='flex space-x-2 rounded-lg'>
          <span className='flex-1 rounded-lg'>
            <IconPencil className='w-full h-5 bg-main text-white font-medium rounded-md '/>
          </span>
          <span className='flex-1 rounded-lg'>
            <IconTrash className='w-full h-5 bg-red-500 text-white font-medium rounded-md '/>
          </span>
        </div>
      </div>
      <div className='p-2 border border-main rounded-lg space-y-0.5 text-sm'>
        <p className='flex items-center justify-between'>
          <span className='font-semibold underline'>#009</span>
          <span className={`text-purple-500 bg-purple-500 bg-opacity-20 text-xs font-medium px-2 py-1 rounded-full capitalize`}>Accepted</span>
        </p>
        <p className='flex items-center justify-between'>
          <span className=''>Title</span>
          <span className=''>Clear bushes</span>
        </p>
        <p className='flex items-center justify-between'>
          <span className=''>Technician assigned</span>
          <span className='flex items-center space-x-1 justify-between'> 
            {/* <span className='w-7 h-7 inline-flex items-center justify-between bg-gray-100 rounded-full'>
             <span className='text-center'>TA</span>
            </span> */}
          <div className="inline-flex overflow-hidden relative justify-center items-center text-xs w-7 h-7 bg-gray-100 rounded-full">
              <span className="font-medium text-gray-600">TA</span> 
          </div>
          <span>Timeyin Attah</span> 
          </span>
        </p>
        <p className='flex items-center justify-between'>
          <span className=''>Status</span>
          <span className={`text-waiting_for_acceptance bg-waiting_for_acceptance bg-opacity-20 text-xs font-medium px-2 py-1 rounded-full capitalize`}>Waiting For Acceptance</span>
        </p>
        <div className='flex space-x-2 rounded-lg'>
          <span className='flex-1 rounded-lg'>
            <IconPencil className='w-full h-5 bg-main text-white font-medium rounded-md '/>
          </span>
          <span className='flex-1 rounded-lg'>
            <IconTrash className='w-full h-5 bg-red-500 text-white font-medium rounded-md '/>
          </span>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;