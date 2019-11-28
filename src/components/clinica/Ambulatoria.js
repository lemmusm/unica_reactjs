import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const AmbularotiaPage = styled.div``;

const Ambulatoria = () => (
  <AmbularotiaPage>
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <p>
            La cirugía ambulatoria o de corta estancia son intervenciones
            quirúrgicas para las cuales es necesario permanecer en el hospital
            un período de 4 a 6 horas. Estos procedimientos han demostrado ser
            seguros y efectivos tanto como la cirugía convencional, razón por la
            cual su uso va en aumento. En Estados Unidos alrededor del 70% de
            las cirugías son ambulatorias y en México cada año aumenta
            considerablemente el número de cirugías de corta estancia.
          </p>
          <p>FOTOS</p>
        </Col>
      </Row>
    </Container>
  </AmbularotiaPage>
);

export default Ambulatoria;
