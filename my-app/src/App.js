import React from 'react';
import "./leaflet.css"
import { IconFile, IconLollipop, IconMapPinFilled, IconPhone, IconMail} from '@tabler/icons-react';
import { MapContainer, TileLayer, useMap , Marker, Popup} from 'react-leaflet'
const position = [51.505, -0.09]

function App() {
  return (
    <div className="">
      <div className='border-2 border-main rounded-lg flex max-w-[80%]'>
        <div className='flex-1 py-1 grow-[3] px-3'>
          <h1 className='text-3xl font-bold capitalize truncate'>IT support engineer needed</h1>
          <span class="inline-flex items-center bg-gray-200 text-black text-xs font-medium px-2.5 py-0.5 truncate rounded-full">
            Problem(0)
          </span>
        </div>
        <div className='border-x-2 border-gray-200 flex-1 py-1 grow-[3] px-3'>
          <span className={`text-purple-500 bg-purple-500 bg-opacity-20 text-base font-medium mr-2 px-6 py-2 rounded-full capitalize`}> 
            Assigned
          </span>
          <span className='text-3xl font-bold capitalize truncate'> #1010222 </span>
          <span className='text-lg font-medium block mt-2'> Created on 12/10/2022 </span>
        </div>
        <div className='flex-1 p-1 grow-[1.5] flex-col'>
          <div className={`flex items-center space-x-1`}>
            <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center`}>
              <IconMapPinFilled className='w-5 h-5'/>
            </div>
            <div className={`flex-1 min-w-0`}>
              <p className={`text-sm text-ash truncate`}>
              {/* <p className={`text-base font-semibold text-black truncate capitalize`}> */}
                Location
              </p>
              <p className={`text-base font-semibold text-black truncate capitalize`}>New York</p>
              {/* <p className={`text-sm text-ash truncate`}>{user.phone || "————————"}</p> */}
            </div>
          </div>
          <div className={`flex items-center space-x-1`}>
            <div className={`flex-shrink-0`}>
              <div className={`inline-flex overflow-hidden relative justify-center items-center w-8 h-8 border border-secondary bg-gray-100 rounded-full uppercase`}>
                {/* <span className={`font-medium text-gray-600`}>{user.first_name.slice(0,1)}{user.last_name.slice(0,1)}</span> */}
                <span className={`font-medium text-gray-600`}>DF</span>
              </div>
              {/* <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Neil"/> */}
            </div>
            <div className={`flex-1 min-w-0`}>
              <p className={`text-base font-semibold text-black truncate capitalize`}>
                Deji Faruq
                {/* {user.first_name} {user.last_name} */}
              </p>
              <p className={`text-sm text-ash truncate`}>08099778654</p>
              {/* <p className={`text-sm text-ash truncate`}>{user.phone || "————————"}</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className='flex min-h-screen font-title gap-2'>
        <div className="basis-[80%]">
          {/* VIEW JOB CATEGORY */}
          <div className="">
            <h5 className="text-xl font-bold capitalize">Job Categories</h5>
            <ul className="text-base">
              <li className="">
                Type of Job:{" "}
                <span className="inline-flex items-center justify-center space-x-1">
                  <span class="inline-flex items-center bg-light border border-main text-green-800 text-xs font-medium px-2.5 py-0.5 truncate rounded-full">
                    Information Technology
                  </span>
                </span>
              </li>
              <li className="">
                Type of Job:{" "}
                <span className="inline-flex items-center justify-center space-x-1">
                  <span class="inline-flex items-center bg-light border border-main text-green-800 text-xs font-medium px-2.5 py-0.5 truncate rounded-full">
                    Professional Services
                  </span>{" "}
                  <span class="inline-flex items-center bg-light border border-main text-green-800 text-xs font-medium px-2.5 py-0.5 truncate rounded-full">
                    Others
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <hr className="my-4 bg-black border border-black"/>
          {/* VIEW JOB SCHEDULE */}
          <div className="">
            <h5 className="text-xl font-bold capitalize">Schedule</h5>
            <div className="space-y-1">
              <div className="text-base">
                <p className="">Start at a specific date and time</p>
                <p className="font-semibold">Monday, 1/2/2023 at 9:00 AM(EST)</p>
              </div>
              <div className="text-base">
                <p className="">Estimated labor hours</p>
                <p className="font-semibold">8 hour(s)</p>
              </div>
              <hr className="h-[1px] bg-black border border-dashed"/>
              <div className="text-base">
                <p className="">Confirmed start time</p>
                <p className="font-semibold">Monday, 1/2/2023 at 9:00 AM(EST)</p>
              </div>
              <div className="text-base">
                <p className="">Duration</p>
                <p className="font-semibold">8 hour(s)</p>
              </div>
            </div>
          </div>
          <hr className="my-4 bg-black border border-black"/>
          {/* VIEW JOB QUALIFICATION */}
          <div className="">
            <h5 className="text-xl font-bold capitalize">Job Qualification</h5>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur. Feugiat a habitant quam condimentum. Ut semper turpis arcu mauris id. Consequat nam mauris aliquet et viverra iaculis feugiat est tristique. Aliquam pharetra vitae tincidunt auctor orci natoque dolor. Lectus egestas diam nec sapien amet sollicitudin dui. Commodo non leo ullamcorper aenean mauris nam non et. Consequat sit vehicula pretium interdum etiam arcu eget. 
              Gravida dui tellus diam integer ut 
              Pellentesque cursus. Lectus vel bibendum in non imperdiet. Eget sit facilisis volutpat porttitor laoreet augue. Dictum quis commodo vitae praesent habitant donec ac justo sit. Est magna nec volutpat bibendum nibh massa ac nunc. Praesent iaculis consequat amet vitae. Nulla sit quis dui at. Sit scelerisque pretium at ac ultricies ligula. Libero est morbi ac bibendum auctor. Est porttitor vitae orci sollicitudin facilisis mi. Morbi congue dignissim amet tortor orci sed. Vitae orci pulvinar id metus dui quisque suspendisse donec. Imperdiet sed posuere diam.
            </p>
          </div>
          <hr className="my-4 bg-black border border-black"/>
          {/* VIEW JOB DOCUMENTS AND ATTACHMENTS */}
          <div className="">
            <h5 className="text-xl font-bold capitalize">Documents / Attachments</h5>
            <ul className="">
              <li className="flex items-center justify-between max-w-sm">
                <span className="inline-flex items-center justify-between space-x-2"> <IconFile className='w-5 h-5'/> IT Support Docs 1</span>
                <span className="">456 kb</span>
              </li>
            </ul>
          </div>
          <hr className="my-4 bg-black border border-black"/>
          {/* VIEW JOB DESCRIPTION */}
          <div className="">
            <h5 className="text-xl font-bold capitalize">Job Description</h5>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur. Feugiat a habitant quam condimentum. Ut semper turpis arcu mauris id. Consequat nam mauris aliquet et viverra iaculis feugiat est tristique. Aliquam pharetra vitae tincidunt auctor orci natoque dolor. Lectus egestas diam nec sapien amet sollicitudin dui. Commodo non leo ullamcorper aenean mauris nam non et. Consequat sit vehicula pretium interdum etiam arcu eget. 
              Gravida dui tellus diam integer ut 
              Pellentesque cursus. Lectus vel bibendum in non imperdiet. Eget sit facilisis volutpat porttitor laoreet augue. Dictum quis commodo vitae praesent habitant donec ac justo sit. Est magna nec volutpat bibendum nibh massa ac nunc. Praesent iaculis consequat amet vitae. Nulla sit quis dui at. Sit scelerisque pretium at ac ultricies ligula. Libero est morbi ac bibendum auctor. Est porttitor vitae orci sollicitudin facilisis mi. Morbi congue dignissim amet tortor orci sed. Vitae orci pulvinar id metus dui quisque suspendisse donec. Imperdiet sed posuere diam.
            </p>
          </div>
          <hr className="my-4 bg-black border border-black"/>
          {/* VIEW JOB CONDFIDENTIAL Information */}
          <div className="">
            <h5 className="text-xl font-bold capitalize">Confidential Information</h5>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur. Feugiat a habitant quam condimentum. Ut semper turpis arcu mauris id. Consequat nam mauris aliquet et viverra iaculis feugiat est tristique. Aliquam pharetra vitae tincidunt auctor orci natoque dolor. Lectus egestas diam nec sapien amet sollicitudin dui. Commodo non leo ullamcorper aenean mauris nam non et. Consequat sit vehicula pretium interdum etiam arcu eget. 
              Gravida dui tellus diam integer ut 
              Pellentesque cursus. Lectus vel bibendum in non imperdiet. Eget sit facilisis volutpat porttitor laoreet augue. Dictum quis commodo vitae praesent habitant donec ac justo sit. Est magna nec volutpat bibendum nibh massa ac nunc. Praesent iaculis consequat amet vitae. Nulla sit quis dui at. Sit scelerisque pretium at ac ultricies ligula. Libero est morbi ac bibendum auctor. Est porttitor vitae orci sollicitudin facilisis mi. Morbi congue dignissim amet tortor orci sed. Vitae orci pulvinar id metus dui quisque suspendisse donec. Imperdiet sed posuere diam.
            </p>
          </div>
          <hr className="my-4 bg-black border border-black"/>
        </div>
        <div className="basis-[20%] space-y-1.5">
          <div className='space-y-2 border-2 border-main rounded-lg py-2'>
            <div className='flex items-center space-x-2 justify-start px-2'>
              <h5 className='text-xl font-bold capitalize '>Pay</h5>
              <span class="inline-flex items-center bg-light border border-main text-green-800 text-xs font-medium px-2.5 py-0.5 truncate rounded-full">
                Hourly
              </span>
            </div>
            <hr className="h-[1px] bg-black border border-dashed"/>
            <div className='flex items-center space-x-2 justify-between px-2'>
              <h5 className='text-xl font-bold capitalize '>Labour</h5>
              <span className='text-xl text-red-500'>$200</span>
            </div>
            <hr className="h-[1px] bg-black border border-dashed"/>
            <div className='px-6 text-base space-y-2'>
              <div className='flex items-center justify-center space-x-1 capitalize'>
                <span className=''>Rate</span>
                <span className=' flex-1'> <div className='h-[1px] border border-dashed border-black'></div> </span>
                <span className=''>$25.00</span>
              </div>
              <div className='flex items-center justify-center space-x-1 capitalize'>
                <span className=''>Hours</span>
                <span className=' flex-1'> <div className='h-[1px] border border-dashed border-black'></div> </span>
                <span className=''>8 Max</span>
              </div>
            </div>
          </div>
          <div className='space-y-2 border-2 border-main rounded-lg py-2'>
            <h5 className='text-xl font-bold capitalize px-2'>Location</h5>
            <div className='px-2 text-sm'>
              <p className='text-base'>New York</p>
              <p className=''>New York</p>
              <p className=''>New York, NY 10018 US</p>
              <p className=''>Commercial</p>
            </div>
            <div className='w-full h-52'>
              <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          <div className='space-y-2 border-2 border-main rounded-lg py-2'>
            <div className='p-2'>
              <h5 className="text-xl font-bold capitalize">Assigned To</h5>
              <div className={`flex items-center space-x-4`}>
                <div className={`flex-shrink-0`}>
                  <div className={`inline-flex overflow-hidden relative justify-center items-center w-10 h-10 border border-secondary bg-gray-100 rounded-full uppercase`}>
                    {/* <span className={`font-medium text-gray-600`}>{user.first_name.slice(0,1)}{user.last_name.slice(0,1)}</span> */}
                    <span className={`font-medium text-gray-600`}>DF</span>
                  </div>
                  {/* <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Neil"/> */}
                </div>
                <div className={`flex-1 min-w-0`}>
                  <p className={`text-base font-semibold text-black truncate capitalize`}>
                    Deji Faruq
                    {/* {user.first_name} {user.last_name} */}
                  </p>
                  <p className={`text-sm text-ash truncate`}>08099778654</p>
                  {/* <p className={`text-sm text-ash truncate`}>{user.phone || "————————"}</p> */}
                </div>
              </div>
            </div>
            <hr className="h-[1px] bg-main border border-main"/>
            <div className='p-2'>
              <h5 className="text-xl font-bold capitalize">Contact Person</h5>
              <div className={`flex items-center space-x-4`}>
                <div className={`flex-shrink-0`}>
                  <div className={`inline-flex overflow-hidden relative justify-center items-center w-10 h-10 border border-secondary bg-gray-100 rounded-full uppercase`}>
                    {/* <span className={`font-medium text-gray-600`}>{user.first_name.slice(0,1)}{user.last_name.slice(0,1)}</span> */}
                    <span className={`font-medium text-gray-600`}>DF</span>
                  </div>
                  {/* <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Neil"/> */}
                </div>
                <div className={`flex-1 min-w-0`}>
                  <p className={`text-base font-semibold text-black truncate capitalize`}>
                    Deji Faruq
                    {/* {user.first_name} {user.last_name} */}
                  </p>
                  <p className={`text-sm text-ash truncate`}>08099778654</p>
                  {/* <p className={`text-sm text-ash truncate`}>{user.phone || "————————"}</p> */}
                </div>
              </div>
              <div className='text-xs font-semibold'>
                <div className='flex items-center justify-start space-x-1'> <IconPhone className='w-5 h-5 text-main inline'/> <span className=''>090875678</span> </div>
                <div className='flex items-center justify-start space-x-1'> <IconPhone className='w-5 h-5 text-main inline'/> <span className=''>attahgbube@gmail.com</span> </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between px-2'>
            <button className='focus:outline-none text-white bg-red-600 hover:bg-red-700 font-semibold text-xs sm:text-sm md:text-base px-2 py-2'>Cancel Job</button>
            <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 font-semibold text-xs sm:text-sm md:text-base px-2 py-2'>File A Complaint</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;