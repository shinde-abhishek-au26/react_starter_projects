import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Footer from './components/footer';
import Menu from './components/menu';
import './index.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// React v18 rendering.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before v18 rendering.
//React.render(<App />, document.getElementById('root'))
