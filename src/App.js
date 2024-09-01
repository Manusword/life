import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom';
import Header from './page/Header';
import DonerPage from './page/DonerPage';
import Login from './page/Login';
import Logout from './page/Logout';
import Register from './page/Register';
import Container from 'react-bootstrap/Container';
import { AuthProvider } from './page/AuthProvider';



function App() {


  return (
    <AuthProvider>
      <Router>
        <div>
        <Header />
        <Container>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/contacts/:id" element={<Contact />} />
            </Routes>
        </Container>
        </div>
      </Router>
    </AuthProvider>
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

