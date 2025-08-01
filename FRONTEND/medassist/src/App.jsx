import React from 'react';
import './assets/css/App.css';
import bgimage from './assets/images/ChatGPT_Image_Jul_31__2025__03_56_15_PM-removebg-preview.png';
export default function App() {
  return (
    <div className='App'>
    <div className='top'>
      <div className="top1"></div>
    </div>
    <div className='navbar'>
      <div className="box1">
        <div className="sbox1">
          <img src={bgimage}></img>
          <div className="sbox2">MediAssist+</div>
          </div>
      </div>
      <div className="box2">
       <ul>
        <li><a>Home</a></li>
          <li><a>About Us</a></li>
            <li><a>Services</a></li>
              <li><a>Doctors</a></li>
                <li><a>Departments</a></li>
       </ul>
      </div>
      <div className="box3">
        <button className="btn">></button>
      </div>
    </div>
    </div>
    
  )
}
