import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CV from './pages/cv/hojaDeVida'
import Proyectos  from './components/proyectos'
import ProyectoVue from './pages/proyectoVue/proyectoVue'

  function AppRouter () {
    return (
    <Router basename="/git-portafolio">
      <Routes>
        <Route path="/" element={<CV />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyectoVue" element={<ProyectoVue />} />
        <Route path="/proyectoAngular" element={<Proyectos />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;