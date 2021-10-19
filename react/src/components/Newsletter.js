import styled from 'styled-components';
import { Button } from './styles/Reusabled';
import { mobile } from '../components/styles/Responsive'

const NewsletterContainer = styled.section`
  // background-color: #fcf5f5;
  background-color: #303D61;
  color: var(--light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 1rem;
  margin: 0.5rem 0;
`;
const Title = styled.h1`
  font-size: var(--title);
`;

const Desc = styled.p`
  font-weight: 300;
  margin-bottom: 2rem;
  text-align: center;
`;

const InputContainer = styled.div`
  width: 50%;
  display: flex;
  border: 1px solid var(--light);
  ${mobile({ 
    width: 'auto',
  })};
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding: 0 1rem;
`;

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <Title>Newsletter</Title>
      <Desc>Subscribe to our newsletter and receive exclusive offers every week.</Desc>
      <InputContainer>
        <Input type='email' placeholder='Your email' />
        <Button filled>
          <i className='fas fa-paper-plane'></i>
        </Button>
      </InputContainer>
    </NewsletterContainer>
  );
};

export default Newsletter;
