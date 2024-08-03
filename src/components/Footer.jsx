import { faFacebook, faInstagram, faLinkedin, faStackOverflow, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className="container-fluid bg-success p-5">
        <div className="row">
          <div className="col-md-4">
            <h4 className='text-light'><FontAwesomeIcon icon={faStackOverflow} className='me-2' />Project Fair</h4>
          <p className='mt-3' style={{TextAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur veniam impedit quo aliquid cum! Labore, illo eius tempora, earum nesciunt ab quas aliquid, nulla laudantium perspiciatis rerum aliquam natus perferendis.</p>
          </div>
          <div className="col-md-2 d-flex align-items-center justify-content-center flex-column">
            <div>
              <h4 className='text-light'>Links</h4>
              <Link to={'/'} style={{color:'black'}}><p className='mt-3'>Home</p></Link>
              <Link to={'/project'} style={{color:'black'}}><p>Projects</p></Link>
              <Link to={'/dashboard'} style={{color:'black'}}><p>Dashboard</p></Link>
            </div>
          </div>
          <div className="col-md-2 d-flex align-items-center justify-content-center flex-column">
            <div>
              <h4 className='text-light'>Guides</h4>
              <p className='mt-3'>React</p>
              <p>Bootstrap</p>
              <p>Bootswatch</p>
            </div>
          </div>
          <div className="col-md-4">
            <h4 className='text-light'>Contact Us</h4>
            <div className='d-flex mt-3'>
              <input type="text" placeholder='email Id' className='form-control rounded-0' />
              <button className='btn btn-warning '>Subscribe</button>
            </div>
            <div className='d-flex mt-4 justify-content-between text-light'>
            <FontAwesomeIcon icon= {faFacebook} className='fa-2x' />
            <FontAwesomeIcon icon= {faInstagram} className='fa-2x' />
            <FontAwesomeIcon icon= {faTwitter} className='fa-2x' />
            <FontAwesomeIcon icon= {faWhatsapp} className='fa-2x' />
            <FontAwesomeIcon icon= {faLinkedin} className='fa-2x' />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer