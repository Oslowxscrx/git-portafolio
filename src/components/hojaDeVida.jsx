import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import io from '../assets/io.png';
import fondoImage from '../assets/fondo.png';

const Portfolio = () => {
  const fondoStyle = {
    backgroundImage: `url(${fondoImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '40px 0',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
  };

  const avatarStyle = {
    borderRadius: '50%',
    border: '4px solid #fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={fondoStyle}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card style={cardStyle}>
              <Card.Body>
                <div className="text-center mb-4">
                  <img src={io} style={avatarStyle} alt="Avatar" width={150} />
                  <h2 className="mt-3">Desarrollador Web</h2>
                  <p className="text-muted">Full Stack Developer | React | Node.js | MongoDB</p>
                </div>
                <hr />
                <div className="section">
                  <h3>Datos Personales</h3>
                  <ul>
                    <li><strong>Nombre:</strong> Oscar González</li>
                    <li><strong>Edad:</strong> 22 años</li>
                    <li><strong>Email:</strong> oscar0694nogales@gmail.com</li>
                    <li><strong>Teléfono:</strong> 0980325270</li>
                  </ul>
                </div>
                <hr />
                <div className="section">
                  <h3>Perfil Profesional</h3>
                  <p>
                    Soy un desarrollador web apasionado por la creación de aplicaciones web modernas y escalables. Tengo experiencia en el desarrollo frontend y backend utilizando tecnologías como React, Node.js y MongoDB.
                  </p>
                </div>
                <hr />
                <div className="section">
                  <h3>Educación</h3>
                  <ul>
                    <li><strong>Universidad:</strong> Instituto Yavirac</li>
                    <li><strong>Colegio:</strong> Replica Juan Pio Montufar</li>
                    <li><strong>Año de Graduación:</strong> 2020</li>
                  </ul>
                </div>
                <hr />
                <div className="section">
                  <h3>Experiencia Laboral</h3>
                  <ul>
                    <li>
                      <strong>Desarrollador Full Stack</strong>
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
                    <Button variant="primary">Ver Proyectos</Button>
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
