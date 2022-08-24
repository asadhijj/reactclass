import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




class SelectedBeast extends React.Component {


render() {
    return (
        <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>{this.props.beastData.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body onClick={this.props.cardModal}>
          <img
            className="img-card"
            src={this.props.beastData.img}
            alt={this.props.beastData.title}
          />
          <p>{this.props.beastData.disc}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeCard}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast