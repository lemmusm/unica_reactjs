import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Banner from "../components/Banner";
import { Gallery } from "@kurpachsv/react-gallery";

const PacientesPage = styled.div`
  ul > li {
    list-style: none;
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
    .boxTitle {
      text-align: center;
    }
  }

  .index {
    display: inline-block;
    font-weight: bold;
    font-size: 2em;
    margin: 0.3em auto;
  }

  .item {
    display: inline-block;
    font-size: 1em;
    font-weight: normal;
    margin: 0.3em auto;
  }
`;

const Title = styled.h1`
  color: #e52d27;
  display: inline-block;
  font-size: 3em;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TitlePlus = styled(Title)`
  color: #34495e;
  font-weight: normal;
`;

const SubtitleBold = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
`;

const SubtitleNormal = styled(SubtitleBold)`
  font-weight: normal;
`;

const ItemList = styled.li`
  display: inline;
`;

class Pacientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moduloOne: [
        {
          src:
            "https://uni-ca.com.mx/img/infopacientes/clinica_pie_diabetico/modulo 1-1.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://uni-ca.com.mx/img/infopacientes/clinica_pie_diabetico/modulo 1-2.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://uni-ca.com.mx/img/infopacientes/clinica_pie_diabetico/modulo 1-4.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://uni-ca.com.mx/img/infopacientes/clinica_pie_diabetico/modulo 1-3.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://uni-ca.com.mx/img/infopacientes/clinica_pie_diabetico/modulo 1-5.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://uni-ca.com.mx/img/infopacientes/clinica_pie_diabetico/modulo 1-6.jpg",
          width: 4,
          height: 3
        },
        {
          src: "https://uni-ca.com.mx/",
          width: 4,
          height: 3
        }
      ],
      moduloTwo: [
        {
          src:
            "https://uni-ca.com.mx/img/infopacientes/clinica_pie_diabeticomodulo 2-1.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://uni-ca.com.mx/img/infopacientes/clinica_pie_diabeticomodulo 2-2.jpg",
          width: 4,
          height: 3
        }
      ],
      bypass: [
        {
          src:
            "https://uni-ca.com.mx/img/infopacientes/clinica_pie_diabetico/bypass 1-1.jpg",
          width: 4,
          height: 3
        }
      ],
      endovascular: [
        {
          src:
            "https://uni-ca.com.mx/img/infopacientes/clinica_pie_diabetico/endov 1.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://uni-ca.com.mx/img/infopacientes/clinica_pie_diabetico/endov 2.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://uni-ca.com.mx/img/infopacientes/clinica_pie_diabetico/endov 3.jpg",
          width: 4,
          height: 3
        }
      ],
      hcronicas: [
        {
          src:
            "https://uni-ca.com.mx/img/infopacientes/clinica_pie_diabetico/heridas cronicas 1.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://uni-ca.com.mx/img/infopacientes/clinica_pie_diabetico/heridas cronicas 2.jpg",
          width: 4,
          height: 3
        },
        {
          src:
            "https://uni-ca.com.mx/img/infopacientes/clinica_pie_diabetico/heridas cronicas 3.jpg",
          width: 4,
          height: 3
        }
      ]
    };
  }

  render() {
    // Variables for Gallery component
    const gutterInPercent = 1;
    const columnsMaxCount = 4;

    return (
      <PacientesPage>
        <Banner></Banner>
        <Container className="mt-5 mb-5">
          <div className="boxTitle">
            <Title>Beneficios</Title>
            <TitlePlus>&nbsp;de la cirugía ambulatoria</TitlePlus>
          </div>
          <Row className="mt-5">
            <Col xs={12} md={6} lg={6}>
              <ul>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      1
                    </Col>
                    <Col
                      className="item align-self-center text-left"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Procedimientos quirúrgicos seguros y no necesitan de
                      internamiento prolongado.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      2
                    </Col>
                    <Col
                      className="item align-self-center text-left"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Usted regresa a su casa el mismo día de la operación.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      3
                    </Col>
                    <Col
                      className="item align-self-center text-left"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Su estancia es más cómoda y agradable.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      4
                    </Col>
                    <Col
                      className="item align-self-center text-left"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Todos los pacientes cuentan con la misma atención.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      5
                    </Col>
                    <Col
                      className="item align-self-center text-left"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Los riesgos de infecciones son menores.
                    </Col>
                  </Row>
                </ItemList>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <ul>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      6
                    </Col>
                    <Col
                      className="item align-self-center text-left"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Los pacientes ambulatorios no compiten con los pacientes
                      graves en su cuidado.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      7
                    </Col>
                    <Col
                      className="item align-self-center text-left"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Atención personalizada por personal experto en Cirugía
                      Ambulatoria.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      8
                    </Col>
                    <Col
                      className="item align-self-center text-left"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Equipo quirúrgico altamente especializado y moderno.
                    </Col>
                  </Row>
                </ItemList>
              </ul>
            </Col>
          </Row>

          <div className="boxTitle mt-5 mb-5">
            <TitlePlus>Que debe conocer del</TitlePlus>
            <Title>&nbsp;Pie Diabético</Title>
          </div>
          <SubtitleBold>Diabetes mellitus</SubtitleBold>
          <p>
            La diabetes mellitus del adulto en México y muchos países, es un
            grave problema de salud pública. Se estima que existen alrededor del
            mundo 140 millones de personas con diabetes mellitus. La mitad de
            los casos de diabetes tipo 2 son asintomáticos, por lo que la
            detección oportuna es importante. México en 1995 ocupaba el noveno
            lugar dentro de los diez países con mayor número de personas con
            diabetes; para el año 2025 se calcula que alcance los 11.7 millones
            y ocupe la séptima posición. Este aumento de la diabetes es por el
            incremento de la sobrevida con una población añosa, el sedentarismo
            y los hábitos dietéticos que fomentan la obesidad. A mayor edad,
            mayor prevalencia. La diabetes es la primer causa de muerte de
            nuestro país.
          </p>
          <SubtitleNormal>¿Qué es el Pie Diabético?</SubtitleNormal>
          <p>
            Según la Organización mundial de la salud; es la infección,
            ulceración y/o destrucción de tejidos profundos asociados con
            alteraciones neurológicas y diversos grados de enfermedad vascular
            periférica de las extremidades inferiores.
          </p>
          <p>
            Es así como la diabetes puede causar problemas en sus pies; incluso
            una pequeña cortada puede tener consecuencias serias. La diabetes
            puede causar daños en los nervios, lo cual reduce la sensibilidad en
            los pies. La diabetes también puede reducir el flujo de sangre a los
            pies, de modo que una herida demore más tiempo en sanar o sea
            incapaz de resistir una infección. Por estos problemas, es posible
            que los pacientes con diabetes no perciban una piedra en su zapato,
            originando una ampolla, una ulceración y finalmente una infección
            crónica que ocasione la perdida de los pies o incluso de la
            extremidad.
          </p>
          <SubtitleBold className="mt-5">
            Para evitar estas complicaciones es necesario seguir los siguientes
            cuidados:
          </SubtitleBold>

          <Row className="mt-5">
            <Col xs={12} md={6} lg={6}>
              <ul>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      1
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Revise sus pies diariamente.
                    </Col>
                    <Col xs={12} md={12} lg="12">
                      Observar con un espejo si existen heridas, ampollas,
                      enrojecimiento, hinchazón o problemas de uñas. Utilizar un
                      espejo de mano con amplificación para revisar la planta de
                      sus pies. Debe consultarse a su médico si se encuentra
                      alguna anomalía.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      2
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Lavar los pies en agua tibia (¡nunca caliente!)
                    </Col>
                    <Col xs={12} md={12} lg="12">
                      Mantener los pies limpios lavándolos diariamente. Usar
                      agua tibia: la temperatura que utilizaría para bañar a un
                      bebé recién nacido. Verificar con los codos la temperatura
                      del agua. Recuerde que puede quemarse sin sentir dolor.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      3
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Secar los pies con cuidado.
                    </Col>
                    <Col xs={12} md={12} lg="12">
                      Secar con una toalla suave o una esponja, sin frotar,
                      dejando que la toalla absorba el agua o con suaves
                      golpecitos con la toalla. Asegúrese de que se ha secado
                      entre los dedos.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      4
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Humectar los pies evitando la zona entre los dedos.
                    </Col>
                    <Col xs={12} md={12} lg="12">
                      Utilice una crema hidratante diariamente para evitar que
                      la piel seca cause escozor o que se agriete. NO aplicar
                      crema hidratante entre los dedos; esto podría causar una
                      infección por hongos.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      5
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Corte de uñas con cuidado y en forma recta.
                    </Col>
                    <Col xs={12} md={12} lg="12">
                      Despuntar las esquinas. No demasiado cortas ya que eso
                      podría causar que la uña se encarne., deje las equinas.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      6
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Nunca corte las verrugas ni los callos.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      7
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Use medias limpias y secas.
                    </Col>
                    <Col xs={12} md={12} lg="12">
                      Cámbielas todos los días.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      8
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Elija bien el tipo de medias que usa.
                    </Col>
                    <Col xs={12} md={12} lg="12">
                      Evite las medias con elásticos apretados, ya que reducen
                      la circulación sanguínea. No use medias gruesas o
                      abultadas (no se ajustan bien y pueden irritar la piel).
                    </Col>
                  </Row>
                </ItemList>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <ul>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      9
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Use medias en la cama.
                    </Col>
                    <Col xs={12} md={12} lg="12">
                      Use medias si se le enfrían los pies durante la noche.
                      NUNCA use almohadillas eléctricas o bolsas de agua
                      caliente.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      10
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Sacuda los zapatos y revíselos por dentro antes de
                      usarlos.
                    </Col>
                    <Col xs={12} md={12} lg="12">
                      Recuerde: es posible que no sienta una piedra en el
                      zapato, por lo tanto sacúdalos antes de ponérselos.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      11
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Mantenga los pies secos y abrigados.
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                      No deje que se le mojen los pies en la nieve o en la
                      lluvia. En invierno use medias y zapatos abrigados.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      12
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Nunca camine descalzo.
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                      ¡Ni siquiera en su casa! Podría pisar algo que lo lastime
                      o corte.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      13
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Controle su diabetes.
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                      Mantenga sus niveles de azúcar en la sangre bajo control.{" "}
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      14
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      No fume.
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                      El fumar restringe la circulación de la sangre a los pies.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      15
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Sea mas activo:
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                      Realice ejercicio en forma habitual mantenga un flujo
                      sanguíneo adecuado en sus pies: mueva sus dedos y tobillos
                      hacia arriba y abajo por 5 minutos dos o tres veces al
                      día, no cruce sus piernas por mucho tiempo. INICIE AHORA:
                      comience a cuidar adecuadamente sus pies hoy y cada día,
                      elija una hora exacta para revisar sus pies diariamente.
                    </Col>
                  </Row>
                </ItemList>
                <ItemList>
                  <Row>
                    <Col className="index" xs={1} md={1} lg={1}>
                      16
                    </Col>
                    <Col
                      className="item align-self-center text-left font-weight-bold"
                      xs={11}
                      md={11}
                      lg={11}
                    >
                      Consulte para revisión periódica de sus pies.
                    </Col>
                  </Row>
                </ItemList>
              </ul>
            </Col>
          </Row>

          <p className="mt-5 mb-5">
            El pie diabético, causa el 20 a 30 % de los internamientos
            hospitalarios, incrementa las defunciones, la necesidad de
            intervenciones quirúrgicas y los costos . Se estima que un 15-25 %
            de los pacientes con diabetes mellitus desarrollan una ulceración en
            algún momento de su vida, de estos el 50% tendrá un riesgo de
            infección que amenace la perdida de la extremidad y un 20% terminara
            en amputación. Alrededor de los 60 años la frecuencia de lesión y
            amputación es mayor. La atención integral de los pacientes y su
            vigilancia en los módulos del pie en riesgo y con lesión, permite
            detectar oportunamente las lesiones, disminuyendo la gravedad de las
            mismas y la necesidad de amputación tratando de salvar los pies del
            paciente, pero cuando ésta es inevitable realizarla con menos
            radicalidad.
          </p>

          <SubtitleNormal>
            ¿Qué es una Clínica del Pie Diabético?
          </SubtitleNormal>
          <p>
            La Clínica del pie diabético es un sistema de atención diseñado para
            los pacientes diabéticos propensos a desarrollar lesiones del pie
            que pueden culminar desastrosamente en amputaciones y la muerte del
            paciente. El enfoque es en la prevención temprana al modificar los
            factores de alto riesgo ya conocidos que causan infección, úlcera e
            isquemia (falta de circulación). Se educa y atiende al paciente y
            sus familiares con un programa integral con un equipo en el que
            intervienen enfermeras, nutricionistas, médicos, técnicos podólogos,
            psicólogos y trabajo social. Una clínica del pie diabético ideal se
            compone de dos módulos:
          </p>

          <p>
            <strong className="font-italic">
              Módulo 1. Llamado Módulo de pie de riesgo.
            </strong>{" "}
            Es un módulo de atención a pacientes diabéticos con alto riesgo de
            desarrollar lesiones. El enfoque es la prevención.
          </p>

          <Gallery
            className="gallery"
            images={this.state.moduloOne}
            enableMasonry
            gutterInPercent={gutterInPercent}
            columnsMaxCount={columnsMaxCount}
          ></Gallery>

          <p>
            <strong className="font-italic">
              Módulo 2. El segundo módulo atiende pacientes con lesión
            </strong>
            limita el daño de la misma con un enfoque conservador que se
            esfuerza en preservar la extremidad y su función. Resuelto el
            problema cuando los resultados son satisfactorios el paciente es
            atendido en el módulo 1 para prevenir recurrencias o una nueva
            lesión en la misma extremidad o en la contralateral.
          </p>

          <Gallery
            className="gallery"
            images={this.state.moduloTwo}
            enableMasonry
            gutterInPercent={gutterInPercent}
            columnsMaxCount={columnsMaxCount}
          ></Gallery>

          <SubtitleNormal className="mt-5">Revascularización:</SubtitleNormal>
          <p>
            Es una cirugia para restablecer la circulación arterial al pie
            afectado, hay dos tipos de revascularizacion mas común.
          </p>

          <p>
            <strong>Bypass o puente arterial:</strong>
            Es una cirugía que dura entre 5 y 8 horas, en la que se realiza un
            puente de vena del mismo paciente para saltar la obstrucción del
            flujo de la sangre arterial que impide la circulación hacia el pie.
          </p>

          <Gallery
            className="gallery"
            images={this.state.bypass}
            enableMasonry
            gutterInPercent={gutterInPercent}
            columnsMaxCount={columnsMaxCount}
          ></Gallery>

          <p>
            <strong>Cirugía Endovascular: </strong>
            Es un procedimiento quirúrgico menos invasivo, que consiste en
            realizar una punción a nivel de la ingle para insertar catéteres con
            balones largos especiales que permiten dilatar las obstrucciones de
            la circulación arterial. A diferencia del primer procedimiento la
            dilatación con balones puede repetirse e incluso si es necesario
            realizar en un segundo tiempo la cirugía mayor de revascularización
            distal. Al reestablecer el flujo sanguíneo con cualquiera de los dos
            procedimientos la cicatrización de las ulceras y heridas puede
            lograrse con mayor facilidad.
          </p>

          <Gallery
            className="gallery"
            images={this.state.endovascular}
            enableMasonry
            gutterInPercent={gutterInPercent}
            columnsMaxCount={columnsMaxCount}
          ></Gallery>

          <SubtitleNormal className="mt-5">Heridas crónicas:</SubtitleNormal>
          <p>
            La clínica de heridas se encarga de evaluar y tratar las heridas que
            llevan mas de 2 semanas de su inicio o que llevan más de 6 semanas
            sin sanar por completo. Hay varios tipos de heridas crónicas de las
            cuales las más comunes son: ulceras por presión, heridas
            quirúrgicas, por radiación, ulceras venosas y pie diabético.
          </p>
          <p>
            Algunos de los factores que impiden que una herida sane o cicatrice
            son: Diabetes, pobre circulación, Daño en los nervios,
            inmovilización o inactividad, disminución en defensas o sistema
            inmune desnutrición o mal nutricionalmente, uso excesivo de alcohol,
            tabaquismo.
          </p>

          <Gallery
            className="gallery"
            images={this.state.hcronicas}
            enableMasonry
            gutterInPercent={gutterInPercent}
            columnsMaxCount={columnsMaxCount}
          ></Gallery>
        </Container>
      </PacientesPage>
    );
  }
}

export default Pacientes;
