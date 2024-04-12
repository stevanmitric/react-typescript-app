import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  const token = localStorage.getItem('token');
  
  return (
    <>
      <Routes>
        <Route path="/" element={token ? <Home /> : <Navigate to="/register" />} />
        <Route path='/register' element={<Register />}/>
      </Routes>
    </>
  );
}

export default App;
