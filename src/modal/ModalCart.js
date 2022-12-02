import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
function ModalCart(props) {
  const [show, setShow] = useState(false);
   const [cart, Setcart] = useState(props.cart);

  const handleShow = () => {
    setShow(props.show);
  };

  const handleClose = () => {
      setShow(false);
  };
  
   console.log(cart);
  return (
    <>
      <Modal
        show={handleShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Detalle De su Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCart;