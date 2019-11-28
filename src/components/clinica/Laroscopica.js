import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const LaroscopicaPage = styled.div`
  .icons {
    color: #e52d27 !important;
    font-weight: bold;
    font-size: 1em;
    margin-right: 0.3em;
  }
`;

const SmallTitle = styled.h5`
  font-size: 1.1em;
  font-weight: bold;
`;

const Laroscopica = () => (
  <LaroscopicaPage>
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <p>
            Es cirugía de mínima invasión donde se aborda la patología por
            incisiones menores de 1cm. Y en las cuales se pueden resolver
            enfermedades como: hernias inguinales, colelitiasis (piedras en la
            vesícula biliar), quistes de ovario, hernias de pared abdominal,
            oclusión tubaria bilateral OTB (método anticonceptivo definitivo.)
          </p>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <SmallTitle>
            <FontAwesomeIcon className="icons" icon={faAngleDoubleRight} />
            Hernioplastía:
          </SmallTitle>
          <p>
            Procedimiento para corregir una hernia cuando la pared muscular es
            débil, ya que tras retirarla, el saco busca la reparación de la
            pared abdominal.
          </p>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <SmallTitle>
            <FontAwesomeIcon className="icons" icon={faAngleDoubleRight} />
            Colecistectomía:
          </SmallTitle>
          <p>
            Intervención quirúrgica que se realiza para extraer una vesícula
            biliar enferma.
          </p>

          <p>FOTOS</p>
        </Col>
      </Row>
    </Container>
  </LaroscopicaPage>
);

export default Laroscopica;
