import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CV from './pages/cv/hojaDeVida'
import Proyectos  from './components/proyectos'
import ProyectoVue from './pages/proyectoVue/proyectoVue'
import ProyectoAngular from './pages/proyectoAngular/proyectoAngular';
import ProyectoReact from './pages/proyectoReact/proyectoReact';

  function AppRouter () {
    return (
    <Router basename="/git-portafolio">
      <Routes>
        <Route path="/" element={<CV />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyectoVue" element={<ProyectoVue />} />
        <Route path="/proyectoAngular" element={<ProyectoAngular />} />
        <Route path="/proyectoReact" element={<ProyectoReact />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;