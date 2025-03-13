import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './proyectoReact.module.css';

import cv from '../../assets/react/cv.png';
import proyectosR from '../../assets/react/proyectosR.png';
import vue from '../../assets/react/vue.png';
import angular from '../../assets/react/angular.png';
import code1 from '../../assets/react/code1.png';
import code2 from '../../assets/react/code2.png';

const ProyectoReact = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');
  
    const handleImageClick = (image) => {
      setModalImage(image);
      setShowModal(true);
    };
  
    const handleCloseModal = () => setShowModal(false);
  return (
    <div className={styles.fondo}>
      <h2 className={styles.titulo}>Portafolio con React</h2>
      <Container className="py-5">
        <Row className="justify-content-center">
          {/* Card 1 */}
          <Col md={4} sm={6} className="mb-4">
            <Card className={styles.card} onClick={() => handleImageClick(cv)}>
              <Card.Body>
                <img src={cv} className={styles.imagen} alt="Portafolio React - CV" />
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4} sm={6} className="mb-4">
            <Card className={styles.card} onClick={() => handleImageClick(proyectosR)}>
              <Card.Body>
                <img src={proyectosR} className={styles.imagen} alt="Portafolio React - Proyectos" />
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={4} sm={6} className="mb-4">
            <Card className={styles.card} onClick={() => handleImageClick(vue)}>
              <Card.Body>
                <img src={vue} className={styles.imagen} alt="Portafolio React - Vue" />
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col md={4} sm={6} className="mb-4">
            <Card className={styles.card} onClick={() => handleImageClick(angular)}>
              <Card.Body>
                <img src={angular} className={styles.imagen} alt="Portafolio React - Angular" />
              </Card.Body>
            </Card>
          </Col>

          {/* Card 5 */}
          <Col md={4} sm={6} className="mb-4">
            <Card className={styles.card} onClick={() => handleImageClick(code1)}>
              <Card.Body>
                <img src={code1} className={styles.imagen} alt="Portafolio React - Code 1" />
              </Card.Body>
            </Card>
          </Col>

          {/* Card 6 */}
          <Col md={4} sm={6} className="mb-4">
            <Card className={styles.card} onClick={() => handleImageClick(code2)}>
              <Card.Body>
                <img src={code2} className={styles.imagen} alt="Portafolio React - Code 2" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Link to="/proyectos">
        <button className={styles.botonVolver}>Volver atrás</button>
        </Link>
      </Container>
      <Modal  className={styles.modal} show={showModal} onHide={handleCloseModal}>
        <Modal.Body className={styles.modalBody}>
          <img src={modalImage} alt="Imagen Grande" className={styles.imagenGrande} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProyectoReact;
