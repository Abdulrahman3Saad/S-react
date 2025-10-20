

import React from 'react'

export default function About() {
  return (
   <div className="container-fluid  main-about-home d-flex justify-content-center flex-column align-items-center text-white">
  <div className="start-about text-center">
    <h2 className='text-uppercase text-white pt-4 mb-3 fs-1 fw-bolder'>about component</h2>
    <div className="ico d-flex justify-content-center align-items-center mb-3">
      <div className='line me-3'></div>
      <i className="fa-solid fa-star"></i>
      <div className='line ms-3'></div>
    </div>
  </div>

  <div className="container">
    <div className="row px-5">
      <div className="col-md-6 ps-md-5">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      <div className="col-md-6 pe-md-5">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
  </div>
</div>

  )
}