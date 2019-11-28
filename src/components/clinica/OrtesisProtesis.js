import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Gallery } from "@kurpachsv/react-gallery";

const OrtesisProtesisSection = styled.div``;

const ButtonDownload = styled.div`
  background: #ff9966;
  background: -webkit-linear-gradient(to right, #ff5e62, #ff9966);
  background: linear-gradient(to right, #ff5e62, #ff9966);
  color: #fff;
  border-radius: 0px;
  display: inline-block;
  padding: 12px 30px;
  min-width: 200px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 768px) {
    float: left !important;
  }
`;

const OrtesisProtesis = () => (
  <OrtesisProtesisSection>
    <Container>
      <Row className="mt-4">
        <Col xs={12} md={12} lg={12}>
          <p className="font-weight-bold">¿Qué es una prótesis?</p>
          <p>
            Definido en términos simples, una prótesis es un dispositivo hecho
            por el hombre, el cual reemplaza el miembro amputado. Una prótesis
            no es algo que pueda ser ordenado de un catalogo; cada una está
            especialmente diseñada para su futuro usuario. Son hechas con las
            especificaciones de las medidas de tu cuerpo, el largo de tu muñón,
            tu peso, edad y estilo de vida.
          </p>
          <p>
            De la misma manera en que tomara tiempo hacer una prótesis que sea
            adecuada para ti, igualmente te tomara tiempo acostumbrarte a
            utilizarla. No esperes que la prótesis sea el reemplazo idéntico de
            tu miembro natural. Sin embargo, con el tiempo te sorprenderás de
            cuanto podrás hacer con tu prótesis.
          </p>

          <p>FOTOS</p>
        </Col>
        <Col xs={12} md={12} lg={12}>
          <p className="font-weight-bold">
            ¿Qué tan pronto puedo obtener una prótesis?
          </p>
          <p>
            Después de la amputación, cuando la herida ya haya sanado y cuando
            el muñón esté preparado con ejercicios y vendas, entonces podrá
            iniciar el proceso de adquirir una prótesis. Generalmente, toma de 4
            a 5 semanas después de la operación. Puede tomar unos meses o más
            dependiendo de sus condiciones de vida. El periodo entre tu cirugía
            y la primera prueba de tu prótesis depende de que tan rápido te
            cures. La línea de la sutura debe estar cerrada y no debe de haber
            ningún drenaje o herida aparente en el muñón. Tu salud general
            también debe de estar en un estado que te permita tolerar los
            ejercicios físicos requeridos. Una prescripción médica es necesaria
            para obtener una prótesis.
          </p>

          <p>FOTOS</p>
        </Col>
        <Col xs={12} md={12} lg={12}>
          <p className="font-weight-bold">¿Quien hará mi prótesis?</p>
          <p>
            Un protesista es un experto en prótesis que diseña, elabora y ajusta
            la prótesis prescrita por un médico. Un protesista recibe el título
            de Órtesista Prótesista Certificado (C.P.O.) o Protesista
            Certificado (C.P.) título dado por la “Sociedad Internacional de
            Órtesistas y Prótesistas” (ISPO) o por la Asociación Americana para
            la Certificación en Órtesis y Prótesis Inc. Y se empeña en apoyar
            las normas más altas de profesionalismo y ética en el cuidado de
            pacientes con discapacidad. Sus habilidades y educación son
            actualizadas a través de publicaciones, conferencias, seminarios,
            cursos cortos de educación continua, ofrecidos mediante la Sociedad.
          </p>

          <p>FOTOS</p>
        </Col>
        <Col xs={12} md={12} lg={12}>
          <p className="font-weight-bold">Selección o diseño de su órtesis</p>
          <p>
            Trabajando en base a una prescripción el órtesista determinará
            primero el mejor tipo de órtesis para sus necesidades individuales.
            Algunas veces un dispositivo prefabricado será la mejor elección. Si
            este es el caso el órtesista realizará los ajustes necesarios y le
            enseñará su uso y cuidado. Con más frecuencia, especialmente con
            órtesis que serán utilizadas un período de tiempo mayor, la órtesis
            deberá ser diseñada a su medida. Si este es su caso el órtesista
            deberá tomar ciertas medidas para obtener un diseño y ajuste a la
            medida.
          </p>
        </Col>
        <Col xs={12} md={12} lg={12}>
          <p className="font-weight-bold">La Órtesis Diseñada a la Medida.</p>
          <p>
            Cuando el médico prescribe un dispositivo hecho a la medida su
            primera visita incluirá una impresión o molde para elaborar la
            órtesis. Este tipo de órtesis tomará varios días en su elaboración.
            El órtesista se apoyará en personal calificado para la fabricación
            de su órtesis. La fabricación comprende un proceso de modificación,
            el cual es importante para una óptima adaptación. Este proceso de
            modificación es con frecuencia muy intenso y demandará, de parte del
            órtesista, profundos conocimientos, experiencia y habilidades y
            sobre todo tener en mente los objetivos que usted desea y necesitar
            obtener. Cuando la órtesis diseñada a su medida ha sido terminada,
            el órtesista la adaptará a usted y le proporcionará instrucciones de
            cómo utilizarla y conservarla en buen estado. El tiempo de
            adaptación dependerá del tipo de órtesis y la complejidad del
            problema que está siendo manejado.
          </p>
        </Col>
        <Col xs={12} md={12} lg={12}>
          <p className="font-weight-bold">
            Usted y su Órtesista, Una Relación Continua.
          </p>
          <p>
            Aún en órtesis que se utilizan en períodos cortos de tiempo, usted
            necesitará regresar a consulta con el órtesista para ajustes menores
            y un adecuado seguimiento de su tratamiento. Si usted utilizará una
            órtesis por períodos mayores de tiempo, el órtesista deberá evaluar
            sus progresos con regularidad. Esto le asegurará que su órtesis esté
            funcionando adecuadamente y que continúa adaptada a usted en forma
            confortable.
          </p>
          <p>
            El órtesista y otros profesionales al cuidado de su salud, miembros
            del equipo clínico, continuarán vigilándolo hasta su completa
            rehabilitación.
          </p>

          <p>FOTOS</p>
        </Col>
        <Col xs={12} md={12} lg={12}>
          <p className="font-weight-bold">Recuerde esto:</p>
          <p>
            El aspecto más importante de su rehabilitación es su cooperación en
            el proceso. No hay fórmula mágica o una pastilla. Usted solamente
            aprovechara su proceso de rehabilitación en la medida en que coopere
            con él.
          </p>

          <ButtonDownload>GUIA PARA EL PACIENTE RECIEN AMPUTADO</ButtonDownload>
        </Col>
      </Row>
    </Container>
  </OrtesisProtesisSection>
);

export default OrtesisProtesis;
