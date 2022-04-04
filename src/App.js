import { Fragment } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';
import Articles from './components/Articles';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/articles' element={<Articles />} exact />
            <Route path='/profile' element={<Profile />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
