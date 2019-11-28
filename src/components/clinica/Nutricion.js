import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Img from "../../assets/img/nutricion.jpg";

const NutricionPage = styled.div`
  img {
    width: 100%;
  }
`;

const Nutricion = () => (
  <NutricionPage>
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <p>
            Para el área de Nutrición en UNI-CA CLÍNICA AMBULATORIA uno de los
            objetivos primordiales ha sido la prevención de enfermedades
            relacionadas con LA OBESIDAD Y EL SOBREPESO COMO LO SON LA DIABETES,
            LA HIPERTENSIÓN Y NIVELES ALTOS DE COLESTEROL Y TRIGLICÉRIDOS, ASÍ
            COMO UNA MALA CIRCULACIÓN es por ello que en UNI-CA ha ido en
            aumento las ORIENTACIONES ALIMENTARIAS, para cambiar estilos y
            hábitos alimentarios.
          </p>
          <p>
            Un plan de alimentación debe de ser equilibrado, balanceado y
            completo, por lo que en UNI-CA, se cuida ampliamente el beneficio
            nutricional del paciente. Otorgándoles un plan individualizado y
            personalizado, en base a la edad del paciente, su actividad física y
            a sus necesidades nutricionales.
          </p>

          <img src={Img} />
        </Col>
      </Row>
    </Container>
  </NutricionPage>
);

export default Nutricion;
