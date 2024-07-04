import React from "react";
import "./myModal.css";
const Mymodal = () => {
  const Modal = ({ content }) => {
    return (
      <>
        <div className="modal">
          <div className="modal-content">
            <p>{content}</p>
            <button>Close</button>
          </div>
        </div>
        <div className="overlay"></div>
      </>
    );
  };

  return (
    <div className="modal-container">
      <button>Open Modal</button>
      <Modal content={"hello"} />
    </div>
  );
};

export default Mymodal;
