import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <footer className='py-5'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-5 col-12'>
            <div className='footer-text'>
              <h4>BidnBuy</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, assumenda?</p>
            </div>
            <div>
              <form className='d-flex py-2' onSubmit={handleSubmit}>
                <input type='email' className='subscribe' />
                <button className='button primary' type='submit'>
                  Subscribe
                </button>
              </form>
              <i className="form-text text-light">By subscribing, you'll get the lastest news and update for BidnBuy.</i>
            </div>
          </div>
          <div className='col-12 col-md-7 footer-links'>
            <div className='footer-list'>
              <h5 className='mb-3'>Information</h5>
              <Link to='#'>Terms of Use</Link>
              <Link to='#'>Privacy Policy</Link>
              <Link to='#'>Partnerships</Link>
              <Link to='#'>About Us</Link>
            </div>
            <div className='footer-list'>
              <h5 className='mb-3'>Help</h5>
              <Link to='#'>FAQs</Link>
              <Link to='#'>How BidnBuy Works?</Link>
              <Link to='#'>BidnBuy Features</Link>
              <Link to='#'>Payments</Link>
            </div>
            <div className='footer-list'>
              <h5 className='mb-3'>Contact Us</h5>
              <Link to='#'>
                <i className='fas fa-envelope-open-text me-2'></i>Email
              </Link>
              <Link to='#'>
                <i className='fab fa-twitter me-2'></i>Twitter
              </Link>
              <Link to='#'>
                <i className='fab fa-facebook me-2'></i>Facebook
              </Link>
              <Link to='#'>
                <i className='fas fa-mobile-alt me-2'></i>Phone
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
