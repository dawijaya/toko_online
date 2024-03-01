// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Apps12 from './Apps12';

function Navigation() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<App />} /> {/* Letakkan ini di atas */}
          <Route path="/cart" element={<Apps12 />} />
        </Routes>
        <nav>
          <ul>
            <Link to="/" className="link-to-home">
              <img src="https://github.com/dawijaya/toko_online/blob/main/public/image/home.jpeg?raw=true" alt="" />
              <span>Home</span>
            </Link>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Navigation />);
