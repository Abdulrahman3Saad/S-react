import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="card-group m-4">
          <div className="card text-white">
            <div className="card-body text-center">
              <h3 className='pt-3'>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="card text-white">
            <div className="card-body">
              <h3 className="pt-3 text-center">AROUND THE WEB</h3>
              <div className="icons d-flex justify-content-center gap-3 mt-3">
                <div className='icon d-flex justify-content-center align-items-center'>
                  <i className='fa-brands fa-facebook'></i>
                </div>
                <div className='icon d-flex justify-content-center align-items-center'>
                  <i className='fa-brands fa-linkedin-in'></i>
                </div>
                <div className='icon d-flex justify-content-center align-items-center'>
                  <i className='fa-brands fa-twitter'></i>
                </div>
                <div className='icon d-flex justify-content-center align-items-center'>
                  <i className='fa-solid fa-globe'></i>
                </div>
              </div>
            </div>
          </div>
          <div className="card text-white">
            <div className="card-body text-center">
              <h3 className='pt-3'>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p bg-dark p-2">
        <p className='d-flex justify-content-center align-items-center text-white pt-2 mb-0'>Copyright © Your Website 2025</p>
      </div>
    </footer>
  )
}
