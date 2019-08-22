import React from "react";
import { Modal, ModalBody, ModalFooter, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const EditTodo = ({
  show,
  updateTodo,
  id,
  content,
  handleChange,
  handleShow
}) => {
  return (
    <Modal isOpen={show} toggle={handleShow}>
      <Modal.Header toggle={handleShow}>Edit Task</Modal.Header>
      <ModalBody>
        <input
          name="content"
          type="text"
          id="content"
          value={content}
          onChange={handleChange}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={e => {
            e.preventDefault();
            updateTodo(id, content);
          }}
        >
          Update Task
        </Button>
        <Button color="secondary" onClick={handleShow}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

EditTodo.propTypes = {};

export default EditTodo;
