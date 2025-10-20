
import imgportfolio1 from '../assets/poert1.png';
import imgportfolio2 from '../assets/port2.png';
import imgportfolio3 from '../assets/port3.png';

export default function Portfolio()

{
  return (

    <div className="main-contact-portfolio pt-4 mb-4">
      <div className="start-portfolio text-center pt-4 ">
        <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>portfolio component</h2>
        <div className="ico-portfolio d-flex justify-content-center align-items-center mb-3">
           <div className='line me-3'></div>
           <i className="fa-solid fa-star"></i>
           <div className='line ms-3'></div>
        </div>
      </div>

      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="img-app rounded-3 overflow-hidden position-relative">
              <img src={imgportfolio1} alt="imgportfolio" className='w-100 rounded-3' />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className='fa-solid fa-plus text-white fa-6x'></i>
              </div>
            </div>
          </div>
           <div className="col-lg-4 col-md-6">
            <div className="img-app rounded-3 overflow-hidden position-relative">
              <img src={imgportfolio2} alt="imgportfolio" className='w-100 rounded-3' />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className='fa-solid fa-plus text-white fa-6x'></i>
              </div>
            </div>
          </div> <div className="col-lg-4 col-md-6">
            <div className="img-app rounded-3 overflow-hidden position-relative">
              <img src={imgportfolio3} alt="imgportfolio" className='w-100 rounded-3' />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className='fa-solid fa-plus text-white fa-6x'></i>
              </div>
            </div>
          </div> <div className="col-lg-4 col-md-6">
            <div className="img-app rounded-3 overflow-hidden position-relative">
              <img src={imgportfolio1} alt="imgportfolio" className='w-100 rounded-3' />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className='fa-solid fa-plus text-white fa-6x'></i>
              </div>
            </div>
          </div> <div className="col-lg-4 col-md-6">
            <div className="img-app rounded-3 overflow-hidden position-relative">
              <img src={imgportfolio2} alt="imgportfolio" className='w-100 rounded-3' />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className='fa-solid fa-plus text-white fa-6x'></i>
              </div>
            </div>
          </div> <div className="col-lg-4 col-md-6">
            <div className="img-app rounded-3 overflow-hidden position-relative">
              <img src={imgportfolio3} alt="imgportfolio" className='w-100 rounded-3' />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className='fa-solid fa-plus text-white fa-6x'></i>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  )
  
}