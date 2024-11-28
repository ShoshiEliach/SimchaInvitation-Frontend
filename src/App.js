import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainLayout from './compenents/MainLayout';
import ViewProducts from './compenents/ViewProducts';
import Products from './compenents/Products';
import Search from './compenents/Search';
import Sidebar from './compenents/Sidebar';
import ProductEditor from './compenents/ProductEditor';
import InvitationReady from './compenents/InvitationReady';
import AppHeaderBar from './compenents/AppHeaderBar';
import { useLocation } from 'react-router-dom';
import UploadFile from './compenents/UploadFile';
import EnterManually from './compenents/EnterManually';
import VoiceRecorder from './compenents/VoiceRecorder';
import LoginForm from './compenents/LoginForm';
import RegisterForm from './compenents/RegisterForm';
function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);
  const location = useLocation();

  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const handleOver = () => setVisibleSidebar(true);
  const handleOut = () => setVisibleSidebar(false);
  const handleClick = () => setVisibleSidebar(!visibleSidebar);

  const products = [
    { id: 'product1', name: 'מוצר 1', category: 'קטגוריה 1', price: '$12.99', imageUrl: 'https://via.placeholder.com/150' },
    { id: 'product2', name: 'מוצר 2', category: 'קטגוריה 2', price: '$10.99', imageUrl: 'https://via.placeholder.com/150' },
    // שאר המוצרים...
  ];




  return (
    <div className='app-containe'>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              handleOver={handleOver}
              handleClick={handleClick}
            />


          }
        >
          {/* דף הבית: "/" */}
          <Route
            index
            element={
              <>
                {visibleSidebar && <Sidebar handleOut={handleOut} />}
                <Search />
                <nav>
                  <Link to='InvitationReady'>Invitation Ready</Link>
                </nav>
                <Products products={products} />
              </>
            }
          />

          {/* דף ViewProducts */}
          <Route path="ViewProducts" element={<ViewProducts />} />
          <Route path='ProductEditor' element={<ProductEditor />} />
          <Route path='InvitationReady' element={<InvitationReady />} />
          <Route path='UploadFile' element={<UploadFile />} />
          <Route path='EnterManually' element={<EnterManually />} />
          <Route path='VoiceRecorder' element={<VoiceRecorder />} />
          <Route path='LoginForm' element={<LoginForm />} />
          <Route path='Register' element={<RegisterForm />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
