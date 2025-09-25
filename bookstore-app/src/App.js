import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
//import Footer from './components/Footer';

// Import Pages
 import HomePage from './pages/HomePage';
 import BookListPage from './pages/BookListPage';
// import BookDetailPage from './pages/BookDetailPage';
 import CategoryPage from './pages/CategoryPage';
 import AboutPage from './pages/AboutPage';
 import ContactPage from './pages/ContactPage';
 import NotFound from './components/NotFound';

// Import CSS
import './App.css';
import Books from './pages/BookListPage';
import Categories from './pages/CategoryPage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar - แสดงในทุกหน้า */}
      <Navbar />
      
      {/* Main Content - เปลี่ยนตาม route */}
      <main className="main-content">
        <Routes>
          {/* หน้าแรก - แสดงหนังสือแนะนำ */}
          <Route path="/" element={<HomePage />} />
          
         
          {/* หน้า 404 - สำหรับ URL ที่ไม่มีอยู่ */}
          <Route path="*" element={<NotFound />} />

          {/* หน้า Books */}
          <Route path="/books" element={<BookListPage />} />

          {/* หน้า Categories */}
          <Route path="/category/fiction" element={<CategoryPage />} />

          {/* หน้า About */}
          <Route path="/about" element={<AboutPage />} />

          {/* หน้า Contact */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
  
    </div>
  );
}

export default App;