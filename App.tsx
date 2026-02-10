
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Heart, Users, Calendar, Phone, Mail, 
  MapPin, Facebook, Twitter, Instagram, ArrowLeft,
  ChevronLeft, Sparkles
} from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Activities from './components/Activities';
import Volunteering from './components/Volunteering';
import Donations from './components/Donations';
import News from './components/News';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';

const LOGO_URL = "https://i.imgur.com/aMbJb18.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'الرئيسية', path: '/' },
    { label: 'من نحن', path: '/about' },
    { label: 'أنشطتنا', path: '/activities' },
    { label: 'الأخبار', path: '/news' },
    { label: 'التطوع', path: '/volunteer' },
    { label: 'اتصل بنا', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 space-x-reverse">
              <div className="w-14 h-14 flex items-center justify-center overflow-hidden rounded-full border-2 border-emerald-50 bg-white shadow-sm">
                <img src={LOGO_URL} alt="جمعية الرحمة" className="w-full h-full object-contain p-1" />
              </div>
              <span className="text-2xl font-bold text-emerald-800 mr-3">جمعية الرحمة</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-colors duration-200 ${
                  isActive(link.path) ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/donations"
              className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-md"
            >
              تبرع الآن
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-800 hover:text-emerald-600 focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-medium ${
                  isActive(link.path) ? 'bg-emerald-50 text-emerald-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/donations"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-emerald-600 text-white px-3 py-4 rounded-md text-base font-bold text-center"
            >
              تبرع الآن
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <img src={LOGO_URL} alt="Logo" className="w-12 h-12 ml-3 bg-white rounded-full p-1" />
              <span className="text-2xl font-bold mr-2">جمعية الرحمة</span>
            </div>
            <div className="flex space-x-4 space-x-reverse mb-6">
              <a href="https://www.facebook.com/profile.php?id=100071742792669" target="_blank" rel="noopener noreferrer" className="bg-emerald-800 p-2 rounded-full hover:bg-emerald-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-emerald-800 p-2 rounded-full hover:bg-emerald-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-emerald-800 p-2 rounded-full hover:bg-emerald-700 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-emerald-800 pb-2">روابط سريعة</h3>
            <ul className="space-y-4 text-emerald-100">
              <li><Link to="/about" className="hover:text-emerald-400">من نحن</Link></li>
              <li><Link to="/activities" className="hover:text-emerald-400">أنشطتنا</Link></li>
              <li><Link to="/volunteer" className="hover:text-emerald-400">التطوع</Link></li>
              <li><Link to="/news" className="hover:text-emerald-400">آخر الأخبار</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-emerald-800 pb-2">مشاريعنا</h3>
            <ul className="space-y-4 text-emerald-100">
              <li>العمل الإنساني</li>
              <li>دعم الأسر المحتاجة</li>
              <li>الحملات الطبية</li>
              <li>سلة رمضان</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-emerald-800 pb-2">تواصل معنا</h3>
            <ul className="space-y-4 text-emerald-100">
              <li className="flex items-start">
                <MapPin className="ml-3 text-emerald-400" size={20} />
                <span>Ouled Teima, Quartier Lhdib</span>
              </li>
              <li className="flex items-center">
                <Phone className="ml-3 text-emerald-400" size={20} />
                <span dir="ltr">+212 662 09 29 37</span>
              </li>
              <li className="flex items-center">
                <Mail className="ml-3 text-emerald-400" size={20} />
                <span>contact@rahma-asso.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-emerald-800 mt-12 pt-8 text-center text-emerald-200">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لجمعية الرحمة الإنسانية</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/volunteer" element={<Volunteering />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        {/* Assistant Bubble for interactivity */}
        <AIAssistant />
      </div>
    </Router>
  );
};

export default App;
