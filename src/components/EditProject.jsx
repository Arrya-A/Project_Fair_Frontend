import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function EditProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <FontAwesomeIcon icon={faPenToSquare} className='text-info' onClick={handleShow} />
    <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor='projImg'>
                <input type="file" id="projImg" style={{ display: 'none' }} />
                <img src="https://t3.ftcdn.net/jpg/04/28/36/88/360_F_428368831_UVan10UgxCCnYgJgFMNoV2xGy7pO8utS.jpg" alt="no image" className='w-100' />
              </label>
            </div>
            <div className="col-md-6">
              <div className="mb-3 mt-3">
                <input type="text" placeholder='Title' className='form-control' />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Language' className='form-control' />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Github' className='form-control' />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Website' className='form-control' />
              </div>
              <div className="mb-3">
                <textarea placeholder="Overview" rows={4} className='form-control'></textarea>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProject