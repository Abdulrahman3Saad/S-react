
import React from 'react'
import imghome from '../assets/imgh.png'

export default function Home() {
  return (
 
        <div className='main-about-home d-flex justify-content-center align-items-center text-white'>
          <div className="img-start text-center">
             <img src={imghome} alt="img" className='mb-3 w-75' />
           <h2 className='text-uppercase text-white pt-4 mb-3 fs-1 fw-bolder'>start Framework</h2>
           <div className="ico d-flex justify-content-center align-items-center mb-3">
            <div className='line me-3'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line ms-3'></div>
           </div>
           <div>Graphic Artist - Web Designer - Illustrator</div>
          </div>
          
        </div>
  
  )
}