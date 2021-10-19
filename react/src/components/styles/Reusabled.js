import styled from 'styled-components';
import { mobile } from './Responsive';

export const Button = styled.button`
  box-sizing: border-box;
  padding: 0.35rem 1rem;
  color: ${(props) => (props.filled ? 'var(--light)' : 'var(--primary)')};
  display: inline-block;
  cursor: pointer;
  font-size: var(--normal);
  font-weight: 300;
  text-transform: capitalize;
  background-color: ${(props) => (props.filled ? 'var(--primary)' : 'var(--light)')};
  // border: ${(props) => (props.outline ? '3px inset var(--primary)' : 'none')};
  box-shadow: ${(props) => (props.outline ? 'inset 0px 0px 0px 1px var(--primary);' : 'none')};
  transition: all ease-in 0.1s;
  ${mobile({
    padding: '0.1rem .7rem',
    fontSize: 'var(--small)',
  })}

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const ButtonLarge = styled(Button)`
  padding: 0.5rem 2rem;
  font-size: var(--medium);
  font-weight: 600;
  text-transform: capitalize;
  ${mobile({
    padding: '0.25rem 1rem',
    fontSize: 'var(--normal)',
  })}
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: wrap;
  @media only screen and (max-width: 980px) {
    flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  }
`;

export const FlexItem = styled.div`
  flex: ${(props) => (!props.flex ? '1' : props.flex)};

  // @media only screen and (max-width: 425px) {
  //   flex-basis: ${(props) => props.basis !== '' && '100%'}
  // }
`;

export const Input = styled.input`
  width: 100%;
  margin: 1rem 0;
  padding: 0.5rem 1rem;

  ${mobile({
    padding: '0.25rem .5rem',
    fontSize: 'var(--small)',
  })}
`;