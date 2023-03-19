import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactWhatsapp from 'react-whatsapp';

function PopOver(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title  id="contained-modal-title-vcenter">
         Talk to us on <strong>WhatsApp!!</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Click the below button to chat with us: <br/><br/>
          {/* <ReactWhatsapp number="+91 7030 20 0057" message="I am interested in joining a course!" style={{border:"none",borderRadius:"100px",background:"none"}}><Figure className="zoom me-1"><Figure.Image width={40} height={40} alt="50x50" src={props.handles1}/></Figure></ReactWhatsapp> */}
          <ReactWhatsapp class="btn btn-outline-success" number="+91 7030 20 0057" message="I am interested in joining a course!">WhatsApp Us</ReactWhatsapp>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button class="btn btn-outline-danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopOver;