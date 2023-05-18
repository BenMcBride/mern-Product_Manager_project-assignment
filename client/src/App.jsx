import Main from './views/Main';
import './bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Detail from './views/Detail';
import ProductUpdate from './components/ProductUpdate';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
function App() {
  return (
    <>
      <Header/>
      <Container className='mt-3'>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<Main />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/products/:id/edit" element={<ProductUpdate />} />
        </Routes>
      </Container>
    </>
  );
}
export default App;
