import React from 'react'
import Header from '../components/Header'
import lockGif from '../assets/Lock.webp'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <h2 className='text-center mt-5'>All Projects</h2>

        {/* All projects are displayed when logged in */}
        <div>
          <div className="row my-4">
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex">
              <input type="text" className='form-control' placeholder='Technologies' />
            </div>
            <div className="col-md-4"></div>
          </div>


          <div className="row my-5">
            <div className="col-md-4 p-4">
              <ProjectCard />
            </div>
            <div className="col-md-4 p-4">
              <ProjectCard />
            </div>
            <div className="col-md-4 p-4">
              <ProjectCard />
            </div>
          </div>
        </div>


        {/* When not logged in */}
        <div className='row mt-5 w-100'>
          <div className="col-md-4"></div>
          <div className="col-md-4 p-4 d-flex justify-content-center align-items-center flex-column">
            <img src={lockGif} alt="no image" width={'70%'} height={'300px'} />
            <h4 className='mt-5 text-center'>Please <Link to={'/login'} className='text-danger'>login</Link> to Explore More</h4>
          </div>
          <div className="col-md-4"></div>
        </div>


      </div>
    </>
  )
}

export default Project