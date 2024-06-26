import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CV from './components/hojaDeVida'
import Proyectos  from './components/proyectos'

  function AppRouter () {
    return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<CV />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;