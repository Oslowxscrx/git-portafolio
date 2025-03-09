import React from 'react';
import io from '../../assets/io.png';
import { Link } from 'react-router-dom';
import styles from './hojaDeVida.module.css';
import fondoImage from '../../assets/fondo.png';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <div className={styles.fondo} style={{ backgroundImage: `url(${fondoImage})` }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className={styles.cardCustom}>
              <Card.Body>
                <div className={`${styles.textCenter} mb-4`}>
                  <img src={io} className={styles.avatar} alt="Avatar" width={150} />
                  <h2 className="mt-3">Desarrollador Web</h2>
                  <p className="text-muted">Full Stack Developer | Angular | Nest.js | Vue.js | React</p>
                </div>
                <hr />
                <div className={styles.section}>
                  <h3>Datos Personales</h3>
                  <ul>
                    <li><strong>Nombre:</strong> Oscar Nogales</li>
                    <li><strong>Edad:</strong> 22 años</li>
                    <li><strong>Email:</strong> oscar0694nogales@gmail.com</li>
                    <li><strong>Teléfono:</strong> 0980325270</li>
                  </ul>
                </div>
                <hr />
                <div className={styles.section}>
                  <h3>Perfil Profesional</h3>
                  <p>
                    Soy un desarrollador web apasionado por la creación de aplicaciones web modernas y escalables. Tengo experiencia en el desarrollo frontend y backend utilizando tecnologías como Angular, React, Vue y Nest.js.
                  </p>
                </div>
                <hr />
                <div className={styles.section}>
                  <h3>Educación</h3>
                  <ul>
                    <li><strong>Universidad:</strong> Instituto Yavirac</li>
                    <li><strong>Colegio:</strong> Replica Juan Pio Montufar</li>
                    <li><strong>Año de Graduación:</strong> 2020</li>
                  </ul>
                </div>
                <hr />
                <div className={styles.section}>
                  <h3>Experiencia Laboral</h3>
                  <ul>
                    <li>
                      <strong>Desarrollador Practicante</strong>
                      <p>Empresa TOC SYSTEMS | 2022 - 2024</p>
                      <p>
                        Desarrollé aplicaciones web utilizando VUE.JS para el frontend y Node.js para el backend.
                      </p>
                    </li>
                  </ul>
                </div>
                <hr />
                <div className="text-center mt-4">
                  <Link to="/proyectos">
                    <Button className={styles.buttonPrimary}>Ver Proyectos</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
