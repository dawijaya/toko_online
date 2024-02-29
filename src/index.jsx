// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Mengganti Switch dengan Routes
import App from './App'; // Ubah nama import dari 'MainApp' menjadi 'App'
import Apps12 from './Apps12'; // Ubah nama import dari 'Apps12' menjadi 'Apps12'

function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
          <Link to="/" className="link-to-home">
          <img src="/public/image/home.jpeg" alt="Home" />
          <span>Home</span>
          </Link>
          </ul>
        </nav>
        <Routes> {/* Gunakan Routes sebagai pembungkus */}
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Apps12 />} />
        </Routes>
      </div>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Navigation />);
