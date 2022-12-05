import { tipos } from "../datafiltros/tipologias";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Col from "react-bootstrap/col";

function GetTipologias(props) {
  const [checked, setChecked] = useState(true);

  const { handletipologia } = props;

  const handleCheck = (event) => {
    setChecked((current) => event.target.checked);
  };
  return (
    <Col xs={12} md={6} className="mt-3">
      <Card>
        <Card.Header className="bg-success text-white">
          Seleccione Tipologias
        </Card.Header>
        <Card.Body>
          <Form>
            <div className="mb-3">
              {tipos.map(({ name, idSap }, index) => {
                return (
                  <Form.Check
                    key={index}
                    inline
                    onClick={handletipologia}
                    onChange={handleCheck}
                    label={name}
                    name={name}
                    //type={type}
                    value={checked}
                    id={`${idSap}`}
                  />
                );
              })}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default GetTipologias;