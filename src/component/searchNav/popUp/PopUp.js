import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FilterComp from '../../FilterComponent/FilterComp';
import './Popup.css'
function PopUp(props) {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    
  >

    {/* <Modal.Header closeButton>
    
    </Modal.Header> */}
    <Modal.Body 
    // style={{backgroundColor:"green",overFlow:"hidden"}}
className="modalBody"
    >
    <FilterComp >
    </FilterComp>
      <Button onClick={props.onHide} className="mt-3 text-center ">Close</Button>
    </Modal.Body>
    {/* <Modal.Footer> */}
    {/* </Modal.Footer> */}
  </Modal>
  )
}

export default PopUp