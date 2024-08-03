import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'


function Profile() {
  const [open, setOpen] = useState(false);


  return (
    <>
      <div className="p-4 shadow mb-5" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <div className="d-flex mt-3">
          <h4>Profile</h4>
          <div className='ms-auto'>
            <button onClick={() => setOpen(!open)} className='btn btn-outline-primary'>{open ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</button>
          </div>
        </div>

        <Collapse in={open}>
          <div>
            <div className='d-flex justify-content-center align-items-center'>
              <label htmlFor='profileImg'>
                <input type="file" id="profileImg" style={{ display: 'none' }} />
                <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png" alt="no image" width={'180px'} height={'180px'} />
              </label>
            </div>


            <div className="mb-3">
              <input type="text" placeholder='Github' className='form-control' />
            </div>
            <div className="mb-3">
              <input type="text" placeholder='LinkedIn' className='form-control' />
            </div>
            <div className="mb-3">
              <button className='btn btn-success w-100'>Update</button>
            </div>


          </div>
        </Collapse>


      </div>
    </>
  )
}

export default Profile