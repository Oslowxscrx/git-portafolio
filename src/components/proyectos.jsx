import React from 'react';
import { Link } from 'react-router-dom';
import styles from './proyectos.module.css';
import { FaVuejs, FaAngular, FaReact } from "react-icons/fa";

const Proyectos = () => {
  return (
    <div className={styles.fondo}>
      <h2 className={styles.titulo}>Proyectos</h2>
      <div className={styles.botonesContainer}>
        <Link to="/proyectoVue">
          <button className={styles.boton1}>Proyecto Vue <FaVuejs /></button>
        </Link>
        <Link>
        <button className={styles.boton2}>Proyecto Angular <FaAngular /></button>
        </Link>
        <Link to="/proyectoReact">
        <button className={styles.boton3}>Proyecto React <FaReact /></button>
        </Link>
      </div>
      <hr />
      <br />
      <Link  to="/">
        <button className={styles.botonVolver}>Volver atras</button>
      </Link>
    </div>
  );
};

export default Proyectos;
