import { useEffect, useState } from 'react';
import { Avatar } from '@mui/joy';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.png';
import '../assets/header.css'; // fichier CSS dédié

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isAuth, setIsAuth] = useState(false); // ← État local
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Appelle ici ta logique de recherche (API, filtre local, etc.)
    console.log("Recherche de membre :", searchQuery);
  };

  return (
    <header className={`main-header py-2 ${scrolled ? 'sticky active' : ''}`}>
      <div className="container-fluid">
        <div className="col-lg-10 m-auto">
          <div className="row align-items-center">
            
            <div className="col-auto">
              <img src={logo} alt="MotemaHub Logo" style={{ width: '50px' }} />
            </div>

            <div className="col">
              <form onSubmit={handleSearch} className="d-flex">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-control form-control-sm me-2"
                  placeholder="Rechercher un membre de la Communauté..."
                  style={{ borderRadius: '20px' }}
                />
                <button type="submit" className="btn btn-sm" style={{ background: '#3d6285', color: 'white', borderRadius: '20px' }}>
                  <FaSearch />
                </button>
              </form>
            </div>

            <div className="col-auto d-flex align-items-center">
              {isAuth ? (
                <>
                  <p className="mb-0 fw-bold me-2">Israël Khumba</p>
                  <Avatar src={logo} />
                </>
              ) : (
                <>
                  <button className="auth-btn auth-btn-outline mx-1">
                    Inscription
                  </button>
                  <button className="auth-btn auth-btn-primary">
                    Connexion
                  </button>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
