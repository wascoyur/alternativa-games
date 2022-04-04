import { Fragment } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main>Main Page</main>
      <Footer />
    </Router>
  );
}

export default App;
