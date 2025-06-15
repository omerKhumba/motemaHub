import { useEffect, useState } from 'react';
import { Avatar } from '@mui/joy';
import logo from '../assets/logo.png';
import '../assets/header.css'; // fichier CSS dédié

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isAuth, setIsAuth] = useState(false); // ← État local

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header py-2 ${scrolled ? 'sticky active' : ''}`}>
      <div className="container-fluid">
        <div className="col-lg-10 m-auto">
          <div className="row align-items-center">
            <div className="col-auto">
              <img src={logo} alt="MotemaHub Logo" style={{ width: '50px' }} />
            </div>

            <div className="col d-flex justify-content-end align-items-center ">
              {isAuth ? (
                <>
                  <p className="mb-0 fw-bold">Israël Khumba</p>
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
