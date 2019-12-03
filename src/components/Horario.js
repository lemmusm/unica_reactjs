import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import styled from "styled-components";

const HorarioComponent = styled.div`
  .list-group-item {
    background-color: transparent;
    border: 0;
    padding: 0.3rem 1.25rem;
  }

  .time {
    font-weight: bold;
    font-size: 1.2em;
  }
`;

const Horario = () => (
  <HorarioComponent>
    <Row>
      <Col className="justify-content-end" xs={6} md={6} lg={6}>
        <ListGroup className="text-right">
          <ListGroup.Item>Lunes</ListGroup.Item>
          <ListGroup.Item>Martes</ListGroup.Item>
          <ListGroup.Item>Miércoles</ListGroup.Item>
          <ListGroup.Item>Viernes</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col className="align-self-center time" xs={6} md={6} lg={6}>
        8:00 am a 7:00pm
      </Col>
    </Row>
    <Row className="mt-3">
      <Col className="justify-content-end" xs={6} md={6} lg={6}>
        <ListGroup className="text-right">
          <ListGroup.Item>Jueves</ListGroup.Item>
          <ListGroup.Item>Sábado</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col className="align-self-center time" xs={6} md={6} lg={6}>
        8:00 am a 3:00pm
      </Col>
    </Row>
  </HorarioComponent>
);
export default Horario;
