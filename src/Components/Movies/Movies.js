import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Movies = ({
  title,
  overview,
  vote_average,
  vote_count,
  release_date,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div onClick={handleShow} class="">
        <ul
          className=""
          style={{ backgroundColor: "#032541", color: "#FFFFFF", listStyle: "none"}}
        >
          <li style={{ cursor: "pointer" }} className="card-title p-2">
            {title}
          </li>
        </ul>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal-view"
        style={{ cursor: "pointer" }}
      >
        <Modal.Header>
          <Modal.Title>Movie Name: {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span style={{ fontWeight: "bold" }}>Short Overview of Movie:</span>{" "}
          {overview} <br />
          <span style={{ fontWeight: "bold" }}>Release Date</span>{" "}
          {release_date} <br />
          <span style={{ fontWeight: "bold" }}>Vote Count:</span> {vote_count}{" "}
          <br />
          <span style={{ fontWeight: "bold" }}>Vote Average:</span>{" "}
          {vote_average} <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Movies;
