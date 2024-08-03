import React from 'react'
import AddProject from '../components/AddProject'
import EditProject from '../components/EditProject'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function MyProject() {
  return (
    <>
  <div className="shadow p-md-5 p-3">
    <div className='d-flex mt-4'>
    <h4 className='text-success me-auto'>My Projects</h4>
    <AddProject/>
    </div>

    <div className='p-3 mt-4 rounded-2 d-flex' style={{backgroundColor:'lightgrey'}} >
      <h5>Media Player</h5>
      <div className="d-flex align-items-center ms-auto">
      <EditProject/>
      <FontAwesomeIcon icon={faGlobe} className='ms-3 text-warning' />
      <FontAwesomeIcon icon={faGithub} className='ms-3 text-success' />
      <FontAwesomeIcon icon={faTrash} className='ms-3 text-danger' />
      </div>
    </div>
    
  </div>
    </>
  )
}

export default MyProject