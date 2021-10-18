import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Movies = ({
  movie,
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
      <div onClick={handleShow} class="card card-design shadow-sm mb-2  mt-3">
        <div className="card-body">
          <h3 className="card-title p-2">{title}</h3>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Movies;
