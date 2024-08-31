import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './page/Header';


import DonerPage from './page/DonerPage';
import Login from './page/Login';
import Register from './page/Register';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Router>
      <div>
      <Header />
      <Container>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contacts/:id" element={<Contact />} />
          </Routes>
      </Container>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <DonerPage />
    </>
  )
}


function Contact() {
  return <h2>Contact Page</h2>;
}

export default App;

