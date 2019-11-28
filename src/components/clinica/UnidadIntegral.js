import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Gallery } from "@kurpachsv/react-gallery";

const UnidadIntegralSection = styled.div`
  ul > li {
    list-style: none;
  }

  .icons {
    color: #ff7964;
    margin-right: 0.3em;
  }

  .gallery {
    justify-content: space-between | space-around !important;
    cursor: default !important;
  }

  @media (max-width: 768px) {
    .gallery > div {
      width: 48% !important;
    }

    .container {
      maring: 0 auto;
      max-width: 95%;
    }
  }
`;

const SmallTitle = styled.h5`
  font-size: 1.1em;
  font-weight: bold;
`;

const UnidadIntegral = () => (
  <UnidadIntegralSection>
    <Container>
      <p>Realizamos como parte del protocolo de atención:</p>
      <Row>
        <Col className="mt-3 mb-3" xs={12} md={12} lg={12}>
          <SmallTitle>
            <FontAwesomeIcon className="icons" icon={faAngleDoubleRight} />
            EVALUACIÓN CLÍNICA DEL PIE:
          </SmallTitle>
          <ul>
            <li>Dermatológico</li>
            <li>Músculo-esquelético.</li>
            <li>Neurológico.</li>
            <li>Vascular.</li>
            <li>
              Laboratorio clínico:
              <p className="font-weight-normal mt-3">
                Glucosa, colesterol, triglicéridos, hemoglobina glicosilada,
                biometría hemática y química clínica.
              </p>
              {/* <Gallery
                                        className="gallery"
                                        images={this.state.evaluacion_pie}
                                        enableMasonry
                                        gutterInPercent={gutterInPercent}
                                        columnsMaxCount={columnsMaxCount}
                                      ></Gallery> */}
            </li>
          </ul>
        </Col>

        <Col xs={12} md={12} lg={12}>
          <SmallTitle>
            <FontAwesomeIcon className="icons" icon={faAngleDoubleRight} />
            ESTUDIOS COMPLEMENTARIOS:
          </SmallTitle>
          <p className="font-weight-normal mt-3">
            Dependiendo de la patología del paciente, contamos con estudios:
          </p>
          <p className="font-weight-bold mt-3">Biomecánica de la marcha:</p>
          <p className="font-weight-normal">
            Para valorar las presiones en la planta de los pies y realizar
            plantillas personalizadas adaptadass a cada patología.
          </p>

          <p className="font-weight-bold mt-3">Estudio MATSCAN (TEKSCAN):</p>
          <p className="font-weight-normal">
            Es un tapete con sensores que mide la presión plantar en la
            deambulación o marcha, localizando los puntos de mayor presión y con
            riesgo de ulceración
          </p>
          {/* <Gallery
                                        className="gallery"
                                        images={
                                          this.state.estudios_complementarios
                                        }
                                        enableMasonry
                                        gutterInPercent={gutterInPercent}
                                        columnsMaxCount={columnsMaxCount}
                                      ></Gallery> */}

          <p className="font-weight-bold mt-3">Estudio SCANFEET (AMFIT):</p>
          <p className="font-weight-normal">
            Es un digitalizador el cual realiza plantillas personalizadas a la
            medida y forma del pie del paciente. Ambos estudios nos dan
            información en tiempo real al momento de la deambulación y así
            realizar la plantilla u ortesís ideal para cada paciente.
          </p>

          {/* <Gallery
                                        className="gallery"
                                        images={this.state.scannfeet}
                                        enableMasonry
                                        gutterInPercent={gutterInPercent}
                                        columnsMaxCount={columnsMaxCount}
                                      ></Gallery> */}

          <p className="font-weight-bold mt-3">
            Estudios de baropodografia digital (Equipo F-Scan):
          </p>
          <p className="font-weight-normal">
            Se revisan las cargas en el pie utilizando un sensor que mide la
            presion en la caminata con la plantilla personalizada, se colocan
            los sensores dentro del calzado para valorar las descargas
            realizadas en la plantilla.
          </p>

          {/* <Gallery
                                        className="gallery"
                                        images={this.state.baropodografiaOne}
                                        enableMasonry
                                        gutterInPercent={gutterInPercent}
                                        columnsMaxCount={columnsMaxCount}
                                      ></Gallery> */}

          <p className="font-weight-normal">
            {" "}
            Estudio con plantillas personalizadas comprobando objetivamente la
            descarga en los puntos de mayor presión (zonas rojas).
          </p>

          {/* <Gallery
                                        className="gallery"
                                        images={this.state.baropodografiaTwo}
                                        enableMasonry
                                        gutterInPercent={gutterInPercent}
                                        columnsMaxCount={columnsMaxCount}
                                      ></Gallery> */}
          <p className="font-italic font-weight-light">
            Primer imagen con plantillas personalizadas, segunda imagen previó
            al uso de plantillas.
          </p>

          {/* <Gallery
                                        className="gallery"
                                        images={this.state.baropodografiaThree}
                                        enableMasonry
                                        gutterInPercent={gutterInPercent}
                                        columnsMaxCount={columnsMaxCount}
                                      ></Gallery> */}

          <p className="font-italic font-weight-light">
            Objetivamente se verifica la descarga en zonas de alto riesgo de
            ulceración. Las gráficas nos apoyan en el estudio de la marcha y la
            adecuada descarga en el pie.
          </p>

          {/* <Gallery
                                        className="gallery"
                                        images={this.state.baropodografiaFour}
                                        enableMasonry
                                        gutterInPercent={gutterInPercent}
                                        columnsMaxCount={columnsMaxCount}
                                      ></Gallery> */}

          <p className="font-italic font-weight-light">
            Imagenes en 3D valorando el pico de presión en la zona de interés.
          </p>

          <p className="font-weight-bold mt-3">
            Laboratorio vascular no invasivo e invasivo:
          </p>
          <p className="font-weight-normal">
            Son necesarios para realizar valoracion de la micro y
            macrocirculación a nivel del pie nos dan un diagnóstico real del
            grado de insuficiencia arterial, apoyandonos para realizar el mejor
            manejo para esta patología.
          </p>

          {/* <Gallery
                                        className="gallery"
                                        images={this.state.lab_vascular}
                                        enableMasonry
                                        gutterInPercent={gutterInPercent}
                                        columnsMaxCount={columnsMaxCount}
                                      ></Gallery> */}

          <p className="font-weight-bold mt-3">
            Doppler de flujo e índice tobillo-brazo:
          </p>
          <p className="font-weight-normal">
            Utilizado para valorar el flujo arterial en el pie y su grado de
            obstrucción.
          </p>

          {/* <Gallery
                                        className="gallery"
                                        images={this.state.doppler}
                                        enableMasonry
                                        gutterInPercent={gutterInPercent}
                                        columnsMaxCount={columnsMaxCount}
                                      ></Gallery> */}

          <p className="font-weight-bold mt-3">
            Tensión percutanea de tensión percutánea de oxígeno (Periflux 6000):
          </p>
          <p className="font-weight-normal">
            Valora la microcirculación a nivel de capilares de epidermis,
            necesario para diagnosticar si una herida tiene el suficiente aporte
            de oxígeno para poder epitelizar, su valor normal es de 70mmhg,
            menor de 30mmhg hay mínima posibilidad de epitelización y requiere
            estudios complementarios para planear su revascularización. Útil
            para valorar si el paciente es candidato a la terapia con cámara
            hiperbárica o planear una cirugía electiva de extremidad inferior
            con insuficiencia arterial o decidir el nivel exacto de amputación.
          </p>

          <p className="font-weight-bold mt-3">Ultrasonido doppler-duplex:</p>
          <p className="font-weight-normal">
            Define la anatomía y los flujos sanguíneos a nivel de las
            extremidades.
          </p>

          <p>VIDEOS</p>

          <p className="font-weight-bold mt-3">
            Angiografía diagnóstica con contraste no iónico y CO2:
          </p>
          <p className="font-weight-normal">
            Nos define la anatomía exacta del árbol arterial en las extremidades
            y el nivel de obstrucción. Indispensable para la planeación de una
            revascularización distal.
          </p>

          {/* <Gallery
                                        className="gallery"
                                        images={this.state.angiografía}
                                        enableMasonry
                                        gutterInPercent={gutterInPercent}
                                        columnsMaxCount={columnsMaxCount}
                                      ></Gallery> */}
        </Col>
      </Row>
    </Container>
  </UnidadIntegralSection>
);

export default UnidadIntegral;
