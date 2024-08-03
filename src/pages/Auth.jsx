import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import lockGif from '../assets/Lock.webp'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'


function Auth({register}) {
  return (
    <>
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="container w-75">
          <h4 className='text-warning'><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back Home</h4>
          <div className='bg-success p-3'>
            <Row>
              <Col md={6} className='p-4 d-flex justify-content-center align-items-center'>
                <img src={lockGif} alt="no image" width={'50%'} />
              </Col>
              <Col md={6} className='p-5 d-flex justify-content-center text-light'>
                <form className='w-100'>
                  <h4 className='text-center text-light'><FontAwesomeIcon icon={faStackOverflow} className='fa-2x' />Project Fair</h4>
                  {register? <h5 className='text-center'>Sign Up to Your Account</h5>
                  :
                  <h5 className='text-center'>Sign Ip In Your Account</h5>}

                  {register&& <div className='mb-3'>
                    <input type="text" placeholder='Username' className='form-control rounded-0' />

                  </div>}
                  <div className='mb-3'>
                    <input type="text" placeholder='Email ID' className='form-control rounded-0' />

                  </div>
                  <div className='mb-3'>
                    <input type="text" placeholder='Password' className='form-control rounded-0' />

                  </div>
                  <div className='mb-3'>
                    {register? <div>
                      <button className='btn btn-warning w-100 rounded-0'>Register</button>
                      <p>Already a User? Click Here to Login</p>
                    </div>
                    :
                    <div>
                      <button className='btn btn-warning w-100 rounded-0'>Login</button>
                      <p>New User? Click Here to Register</p>
                    </div>}
                  </div>
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>

    </>
  )
}

export default Auth