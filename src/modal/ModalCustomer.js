import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FiShoppingCart, FiHome, FiUser, FiDollarSign } from "react-icons/fi";
import { Button } from "react-bootstrap";
import Departament from "./components/Departament"

function ModalCustomer(props) {
 
  return (
    <>
      <Modal
        show={props.showClient}
        onHide={props.handleCloseClient}
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FiUser />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Identificaion</Form.Label>
              <Form.Control
                type="number"
                max="11"
                placeholder="ingrese numero de cedula"
              />
              <Form.Text className="text-muted">cedula del cliente</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Primer Nombre</Form.Label>
              <Form.Control type="text" placeholder="Primer Nombre" />
              <Form.Text className="text-muted">
                Primer Nombre del cliente
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>segundo Nombre</Form.Label>
              <Form.Control type="text" placeholder="segundo  Nombre" />
              <Form.Text className="text-muted">
                segundo Nombre del cliente
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="primerapellido">
              <Form.Label>Primer Apellido</Form.Label>
              <Form.Control type="text" placeholder="Primer Apellido" />
              <Form.Text className="text-muted">Primer Apellido</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="segundoapellido">
              <Form.Label>Segundo Apellido</Form.Label>
              <Form.Control type="text" placeholder="Segundo Apellido" />
              <Form.Text className="text-muted">Segundo Apellido</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="Tratamiento">Tratamiento</Form.Label>
              <Form.Select id="Tratamiento">
                <option value="" selected Disabled>
                  Seleccione
                </option>
                <option value="Architect">ARQUITECTO</option>
                <option value="Architect(F)">ARQUITECTA</option>
                <option value="Design house">CASA-DISEÑO</option>
                <option value="Desinger">DISEÑADOR</option>
                <option value="Desinger(F)">DISEÑADORA</option>
                <option value="Distributor-Importer">
                  DISTRIBUIDOR-IMPORTADORA
                </option>
                <option value="Company">EMPRESA</option>
                <option value="Big Surfaces">GRANDES-SUPERFICIES</option>
                <option value="Engineer(F)">INGENIERA</option>
                <option value="Engineer">INGENIERO</option>
                <option value="Master">MAESTRO</option>
                <option value="Retailer">RETAILER</option>
                <option value="Mr.">SEÑOR</option>
                <option value="Mr. and Mrs.">SEÑOR-SEÑORA</option>
                <option value="Ms.">SEÑORA</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Telefono">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text" placeholder="Telefono" />
              <Form.Text className="text-muted">Telefono</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="email" />
              <Form.Text className="text-muted">Email</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Direccion">
              <Form.Label>Direccion</Form.Label>
              <Form.Control type="text" placeholder="Direccion" />
              <Form.Text className="text-muted">Direccion</Form.Text>
            </Form.Group>
            <Departament />
            {/* <GetCitys region={"54"} /> */}
          </Form>
        </Modal.Body>
        <Button variant="danger" type="submit">
          Registrar cliente
        </Button>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCustomer;
