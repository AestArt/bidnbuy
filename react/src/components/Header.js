import { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [click, setClick] = useState(false);
  const [nav, showNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 998) showNav(true);
    else showNav(false);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 80) setScroll(true);
    else setScroll(false);
  };

  useEffect(() => {
    if(!nav){
      setClick(false)
    }
    scrollHeader();
    showButton();
  }, [nav]);

  window.addEventListener('scroll', scrollHeader);
  window.addEventListener('resize', showButton);

  return (
    <header className={!scroll ? 'header' : 'header scroll-header'}>
      <div className='container'>
        {/********** Two section nav ************/}

        {/* <nav>
          <a href='/#' className='nav-logo'>
            BidnBuy
          </a>

          {!nav ? (
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
              <ul className='nav-list'>
                <li>
                  <a href='#login' className='nav-links'>
                    <span className='button button-primary'>Login</span>
                  </a>
                </li>

                <li>
                  <a href='#register' className='nav-links'>
                    <span className='button button-secondary'>Sign Up</span>
                  </a>
                </li>
              </ul>
            </>
          ) : !click ? (
            <i className='fas fa-bars' onClick={handleClick}></i>
          ) : (
            <i className='fas fa-times' onClick={handleClick}></i>
          )}
        </nav> */}

        <nav>
          {nav &&
            (!click ? (
              <i className='fas fa-bars' onClick={handleClick}></i>
            ) : (
              <i className='fas fa-times' onClick={handleClick}></i>
            ))}

          <a href='/#' className='nav-logo'>
            BidnBuy
          </a>

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
              <li>
                <a href='#login' className='nav-links'>
                  <span className='button button-primary'>Login</span>
                </a>
              </li>

              <li>
                <a href='#register' className='nav-links'>
                  <span className='button button-secondary'>Sign Up</span>
                </a>
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
