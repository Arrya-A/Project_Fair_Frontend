import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import projImage from '../assets/project1.png'
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';


function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <>
      <Card style={{ width: '100%' }} className='shadow border-0 rounded-0'>
        <Card.Img variant="top" src={projImage} className='rounded-0' onClick={handleShow} />
        <Card.Body>
          <Card.Title className='text-center'>Card Title</Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img src={projImage} alt="no image" width={'100%'} />
            </Col>
            <Col md={6}>
              <h4>Description:</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto magnam nobis inventore consequatur cupiditate voluptatum a doloribus magni sapiente. Amet officiis dolor dolores vel aspernatur voluptatum modi beatae corrupti ex?</p>
              <h4 className='mt-3'>Technologies</h4>
              <p>React</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <FontAwesomeIcon icon={faGithub} className="fa-2x text-info" />
          <FontAwesomeIcon icon={faLink} className="fa-2x text-info ms-3" />

        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProjectCard