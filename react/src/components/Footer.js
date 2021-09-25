import './Footer.css';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <footer className='py-5'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-5'>
            <div className='footer-text'>
              <h4>BidnBuy</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, assumenda?</p>
            </div>
            <form className='d-flex' onSubmit={handleSubmit}>
              <input type='email' className='subscribe' />
              <button className='button button-primary' type='submit'>
                Subscribe
              </button>
            </form>
          </div>
          <div className='col-12 col-md-7 footer-links'>
            <div className='footer-list'>
              <h5>Information</h5>
              <a href='/#'>Terms of Use</a>
              <a href='/#'>Privacy Policy</a>
              <a href='/#'>Partnerships</a>
              <a href='/#'>About Us</a>
            </div>
            <div className='footer-list'>
              <h5>Help</h5>
              <a href='/#'>FAQs</a>
              <a href='/#'>How BidnBuy Works?</a>
              <a href='/#'>BidnBuy Features</a>
              <a href='/#'>Payments</a>
            </div>
            <div className='footer-list'>
              <h5>Contact Us</h5>
              <a href='/#'>
                <i className='fas fa-envelope-open-text me-2'></i>Email
              </a>
              <a href='/#'>
                <i className='fab fa-twitter me-2'></i>Twitter
              </a>
              <a href='/#'>
                <i className='fab fa-facebook me-2'></i>Facebook
              </a>
              <a href='/#'>
                <i className='fas fa-mobile-alt me-2'></i>Phone
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
