import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/styles/Reusabled';

const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  box-shadow: ${(props) => (props.scroll ? '0 1px 12px hsla(174, 63%, 15%, 0.15)' : 'none')};
  background-color: ${(props) => props.scroll && 'var(--light)'};
`;
const Nav = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: var(--dark);
  }
  i {
    font-size: var(--medium);
  }
`;
const NavItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
`;
const NavLink = styled.div`
  margin: 0.5rem 0.8rem;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    font-size: var(--normal);
  }
`;

const NavLogo = styled.div`
  font-size: var(--large);
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const [nav, showNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);

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
    showbtn();
  }, [nav]);

  window.addEventListener('scroll', scrollHeader);
  window.addEventListener('resize', showbtn);

  return (
    <Head scroll={scroll}>
      <div className='container'>
        <Nav>
          {nav &&
            (!click ? (
              <i className='fas fa-bars' onClick={handleClick}></i>
            ) : (
              <i className='fas fa-times' onClick={handleClick}></i>
            ))}
          <NavItem>
            <NavLogo>
              <Link to='/'>BidnBuy</Link>
            </NavLogo>
          </NavItem>

          {!nav && (
            <NavItem>
              <NavLink>
                <Link to='/bids'>Bids</Link>
              </NavLink>

              <NavLink>
                <Link to='/howitworks'>How it works</Link>
              </NavLink>

              <NavLink>
                <i className='fas fa-search '></i>
              </NavLink>
            </NavItem>
          )}

          {!nav ? (
            <NavItem>
              <NavLink>
                <Link to='register'>
                  <Button filled>Register</Button>
                </Link>
              </NavLink>

              <NavLink>
                <Link to='login'>
                  <Button outline>Login</Button>
                </Link>
              </NavLink>
            </NavItem>
          ) : (
            <i className='far fa-user-circle'></i>
          )}
        </Nav>
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
    </Head>
  );
};

export default Header;
