import React from 'react';
import vue1 from '../../assets/vue/vue1.png';
import vue2 from '../../assets/vue/vue2.png';
import vue3 from '../../assets/vue/vue3.png';
import vue4 from '../../assets/vue/vue4.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './proyectoVue.module.css';

const ProyectoVue = () => {
  return (
    <div className={styles.fondo}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className={styles.cardCustom}>
              <Card.Body>
                <div className={`${styles.textCenter} mb-4`}>
                  <h2 className="mt-3">Escáner de QR en Vue</h2>
                  <p className="text-muted">Proceso de implementación del escáner de códigos QR en Vue.js</p>
                </div>
                <hr />
                <div className={styles.section}>
                  <img src={vue1} className={styles.imagenQR} alt="Paso 1 - Instalación" />
                </div>
                <hr />
                <div className={styles.section}>
                  <img src={vue2} className={styles.imagenQR} alt="Paso 2 - Integración" />
                </div>
                <hr />
                <div className={styles.section}>
                  <img src={vue3} className={styles.imagenQR} alt="Paso 3 - Configuración" />
                </div>
                <hr />
                <div className={styles.section}>
                  <img src={vue4} className={styles.imagenQR} alt="Paso 4 - Visualización" />
                </div>
                <hr />
                <Link  to="/proyectos">
                  <button className={styles.botonVolver}>Volver atras</button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProyectoVue;
