import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImage from '../assets/project.jpg'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="container-fluid bg-success p-4 mb-4" style={{ width: '100%', height: '100vh' }}>
        <Row className='mt-5'>
          <Col md={6} className='d-flex justify-content-center align-items-center flex-column'>
            <div>
              <h1 className='text-light' style={{ fontSize: '76px' }}>Project Fair</h1>
              <h6>One stop destination for all software development Projects</h6>
              <Link to={'/login'}><button className='btn btn-outline-light my-4'>Get Started<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button></Link>
              <Link to={'/dashboard'}><button className='btn btn-outline-light my-4'>Manage Projects<FontAwesomeIcon icon={faArrowRight} className='ms-2' /></button></Link>
            </div>

          </Col>
          <Col md={6} className='d-flex justify-content-center align-items-center flex-column'>
            <img src={titleImage} alt="no image" width={'80%'} />
          </Col>
        </Row>
      </div>

      <div className='container-fluid'>
        <h1 className='text-center my-5'>Explore Our Projects</h1>
        <div className="row mb-5">
          <div className="col-md-4 justify-content-center d-flex p-4 ">
            <ProjectCard />
          </div>
          <div className="col-md-4 justify-content-center d-flex p-4">
            <ProjectCard />
          </div>
          <div className="col-md-4 justify-content-center d-flex p-4">
            <ProjectCard />
          </div>
        </div>
        <Link to={'/project'} className='text-secondary' ><h5 className='text-center my-5'>See more Projects</h5></Link>
      </div>
    </>
  )
}

export default Home




