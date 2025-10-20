
import React from 'react'

export default function Contact() {
  return (
   
    <div className="main-contact-portfolio container pt-4">
      <div className="start-contact text-center pt-4 ">
        <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>conatct section</h2>
        <div className="ico-portfolio d-flex justify-content-center align-items-center mb-3">
          <div className='line me-3'></div>
          <i className="fa-solid fa-star"></i>
          <div className='line ms-3'></div>
        </div>
      </div>

      <form className='w-50 p-3 mx-auto mt-5'>
        <label htmlFor="userName" className='position-relative '>userName :</label>
        <input type="text" name='userName' placeholder='......' className='form-control border-0 border-bottom py-3 position-relative ' />

        <label htmlFor="userAge" className='position-relative '>userAge :</label>
        <input type="text" name='userAge' placeholder='......' className='form-control border-0 border-bottom py-3 position-relative ' />

        <label htmlFor="userEmail" className='position-relative '>userEmail :</label>
        <input type="email" name='userEmail' placeholder='......' className='form-control border-0 border-bottom py-3 position-relative ' />

        <label htmlFor="userPassword" className='position-relative '>userPassword :</label>
        <input type="password" name='userPassword' placeholder='......' className='form-control border-0 border-bottom py-3 position-relative ' />

        <button className='btn btn-primary mt-4 text-white'>send Message</button>
      </form>


    </div>
  )
}