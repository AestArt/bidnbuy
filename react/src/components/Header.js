import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Header.css';

const Header = () => {
  const [click, setClick] = useState(false);
  const [nav, showNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  const showbtn = () => {
    if (window.innerWidth <= 998) showNav(true);
    else showNav(false);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 80) setScroll(true);
    else setScroll(false);
  };

  useEffect(() => {
    if (!nav) {
      setClick(false);
    }
    // scrollHeader();
    showbtn();
  }, [nav]);

  window.addEventListener('scroll', scrollHeader);
  window.addEventListener('resize', showbtn);

  return (
    <header className={!scroll ? 'header' : 'header scroll-header'}>
      <div className='container'>
        <nav>
          {nav &&
            (!click ? (
              <i className='fas fa-bars' onClick={handleClick}></i>
            ) : (
              <i className='fas fa-times' onClick={handleClick}></i>
            ))}

          <Link to='/' className='nav-logo'>
            BidnBuy
          </Link>

          {!nav && (
            <>
              <ul className='nav-list'>
                <li>
                  <a href='#home' className='nav-links'>
                    <span>Bids</span>
                  </a>
                </li>

                <li>
                  <a href='#skills' className='nav-links'>
                    <span>Winners</span>
                  </a>
                </li>

                <li>
                  <i className='fas fa-search nav-links'></i>
                </li>
              </ul>
            </>
          )}

          {!nav ? (
            <ul className='nav-list'>
              <li className='nav-links'>
                <Button route='register' type='primary'>
                  Register
                </Button>
              </li>

              <li>
                <Button route='login' type='primary-outline'>
                  Sign Up
                </Button>
              </li>
            </ul>
          ) : (
            <i className='far fa-user-circle'></i>
          )}
        </nav>
      </div>

      {click && (
        <ul className='nav-menu'>
          <li>
            <a href='#skills' className='nav-links'>
              <span>Bids</span>
            </a>
          </li>
          <li>
            <a href='#skills' className='nav-links'>
              <span>Winners</span>
            </a>
          </li>
          <li className='menu-input'>
            <input type='text' className='menu-search' />
            <i className='fas fa-search search-icon'></i>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
