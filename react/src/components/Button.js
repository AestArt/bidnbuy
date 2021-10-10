import { Link } from 'react-router-dom';

const Button = ({children, route, type, onClick, size, width}) => {
  return (
    <Link to={route}>
      <button className={`button ${type} ${size} ${width}`} onClick={onClick}>{children}</button>
    </Link>
  );
};

Button.defaultProps = {
  route: '#',
  type: 'primary',
  size: ''
};

export default Button;
