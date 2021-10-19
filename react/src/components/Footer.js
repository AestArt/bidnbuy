import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer } from './styles/Reusabled';
import { tab } from '../components/styles/Responsive';

const Foot = styled.footer`
  padding: 3rem 0;
  background-color: var(--primary);
  color: var(--light);
`;
const FooterText = styled.div`
  flex-basis: 40%;
  ${tab({ flexBasis: '100%', marginBottom: '2rem' })}
  h4 {
    font-size: var(--medium);
  }
  p {
    font-size: var(--small);
  }
`;

const FooterLinks = styled.div`
  flex-basis: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  ${tab({ flexBasis: '100%', justifyContent: 'start' })}
`;

const FooterLists = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
${tab({ flexBasis: '50%', marginBottom: '2rem' })}
}

h5 {
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 1rem;
}

a {
  font-variant: small-caps;
  color: var(--light);
  padding: 0.3rem 0;
  font-size: var(--small);
}
`;
const Footer = () => {
  return (
    <Foot>
      <div className='container'>
        <FlexContainer align='center'>
          <FooterText>
            <h4>BidnBuy</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which don’t
              look even slightly believable.
            </p>
          </FooterText>
          <FooterLinks>
            <FooterLists>
              <h5>Information</h5>
              <Link to='#'>Terms of Use</Link>
              <Link to='#'>Privacy Policy</Link>
              <Link to='#'>Partnerships</Link>
              <Link to='#'>About Us</Link>
            </FooterLists>
            <FooterLists>
              <h5>Help</h5>
              <Link to='#'>FAQs</Link>
              <Link to='#'>How BidnBuy Works?</Link>
              <Link to='#'>BidnBuy Features</Link>
              <Link to='#'>Payments</Link>
            </FooterLists>
            <FooterLists>
              <h5>Contact Us</h5>
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
            </FooterLists>
          </FooterLinks>
        </FlexContainer>
      </div>
    </Foot>
  );
};

export default Footer;
