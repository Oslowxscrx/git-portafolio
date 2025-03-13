import React,  { useState } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './proyectoAngular.module.css';

import login from '../../assets/angular/login.png';
import dashboard from '../../assets/angular/dashboard.png';
import area from '../../assets/angular/areas.png';
import empleados from '../../assets/angular/empleados.png';
import proyectos from '../../assets/angular/proyectos.png';
import actividades from '../../assets/angular/actividades.png';
import usuarios from '../../assets/angular/usuarios.png';

const ProyectoAngular = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleImageClick = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);
  return (
    <div className={styles.fondo}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
              }}>
              <Card.Body>
                <div className={`${styles.textCenter} mb-4`}>
                  <h2 className="mt-3">Admin Corp - Sistema de Administración Empresarial</h2>
                  <p className="text-muted">Proceso de desarrollo y descripción del sistema Admin Corp</p>
                </div>
                <hr />
                
                {/* Fila de imágenes */}
                <Row>
                  <Col md={4}>
                    <Card className={styles.card} onClick={() => handleImageClick(login)}>
                      <img src={login} className={styles.imagen} alt="Login" />
                      <p>Pantalla de acceso para ingresar al sistema.</p>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className={styles.card} onClick={() => handleImageClick(dashboard)}>
                      <img src={dashboard} className={styles.imagen} alt="Dashboard" />
                      <p>Vista general con métricas clave.</p>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className={styles.card} onClick={() => handleImageClick(area)}>
                      <img src={area} className={styles.imagen} alt="Áreas" />
                      <p>Gestión de áreas dentro de la empresa.</p>
                    </Card>
                  </Col>
                </Row>
                
                <hr />
                
                {/* Segunda fila de imágenes */}
                <Row>
                  <Col md={4}>
                    <Card className={styles.card} onClick={() => handleImageClick(empleados)}>
                      <img src={empleados} className={styles.imagen} alt="Empleados" />
                      <p>Gestión de empleados y su asignación de áreas.</p>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className={styles.card} onClick={() => handleImageClick(proyectos)}>
                      <img src={proyectos} className={styles.imagen} alt="Proyectos" />
                      <p>Creación de proyectos y asignación de líderes.</p>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className={styles.card} onClick={() => handleImageClick(actividades)}>
                      <img src={actividades} className={styles.imagen} alt="Actividades" />
                      <p>Gestión de actividades dentro de los proyectos.</p>
                    </Card>
                  </Col>
                </Row>
                
                <hr />
                
                {/* Última fila de imágenes */}
                <Row>
                  <Col md={4}>
                    <Card className={styles.card} onClick={() => handleImageClick(usuarios)}>
                      <img src={usuarios} className={styles.imagen} alt="Usuarios" />
                      <p>Creación de usuarios para la plataforma.</p>
                    </Card>
                  </Col>
                </Row>

                <hr />
                <Link to="/proyectos">
                  <button className={styles.botonVolver}>Volver atrás</button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal  className={styles.modal} show={showModal} onHide={handleCloseModal}>
        <Modal.Body className={styles.modalBody}>
          <img src={modalImage} alt="Imagen Grande" className={styles.imagenGrande} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProyectoAngular;
