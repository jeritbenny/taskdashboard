import React from 'react'
import { Link } from 'react-router-dom'
import image from '../Assets/Briefcase.png';
import image2 from '../Assets/StatBoard.png';
import image3 from '../Assets/Shutdown.png';

import { FaHome, FaLifeRing, FaPlug, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
function Sidebar() {
  return (
    <div>
     
      <div className="w-60 h-screen bg-gray-800 text-white pl-4">
      <div className=' text-center mb-10 pt-5 p-2'>
        <img src={image} alt='img' className='mx-auto '/>
        <img src={image2} alt='img' className='mx-auto '/>
      </div>
  <div className="mb-4 ml-10">
    <Link to="/" className="flex items-center hover:bg-gray-600 p-2 rounded no-underline text-white">
      <FaHome className="mr-2" />
      Dashboard
    </Link>
  </div>
  <div className="mb-4 ml-10">
    <Link to="/support" className="flex items-center hover:bg-gray-600 p-2 rounded no-underline text-white">
      <FaLifeRing className="mr-2" />
      Support
    </Link>
  </div>
  <div className="mb-4 ml-10">
    <Link to="/plugin" className="flex items-center hover:bg-gray-600 p-2 rounded no-underline text-white">
      <FaPlug className="mr-2" />
      Plugin
    </Link>
  </div>
  <div className="mb-100 ml-10">
    <Link to="/help" className="flex items-center hover:bg-gray-600 p-2 rounded no-underline text-white">
      <FaQuestionCircle className="mr-2" />
      Help
    </Link>
  </div>
  <div className="" style={{marginTop:"200px"}}>
    <button className="bg-red-500 text-white px-4 py-2 w-full hover:bg-red-600 no-underline text-white">
      
      Logout<FaSignOutAlt/>
    </button>
  </div>
    </div>
    </div>
  )
}

export default Sidebar