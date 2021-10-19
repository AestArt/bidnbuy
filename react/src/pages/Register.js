import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { tab } from '../components/styles/Responsive';
import { Button, Input } from '../components/styles/Reusabled';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('https://images.pexels.com/photos/1157805/pexels-photo-1157805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
      center;
  background-size: cover;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${tab({ width: '75%' })}
`;

const FormContainer = styled.div`
  width: 100%;
  padding: 1.5rem;
  background-color: white;
  font-size: var(--normal);
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer className='shadow'>
          <Form>
            <h1 className='fz-large text--primary'>
              <Link to='/'>BidnBuy</Link>
            </h1>
            <Input placeholder='Username' />
            <Input placeholder='Password' />
            <Button filled className='w-50'>
              Register
            </Button>
            <p className='fz-small mt-3'>
              Already have an account? <Link to='login'>Login</Link>
            </p>
          </Form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default Register;
