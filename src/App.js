import { Fragment } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';
import ArticleDetailed from './pages/ArticleDetailed';
import Profile from './components/Profile';
import Auth from './components/Auth';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/article/:id' element={<ArticleDetailed />} exact />
            <Route path='/profile' element={<Profile />} exact />
            <Route path='/login' element={<Auth />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
