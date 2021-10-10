import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Login = () => {
  return (
    <main className='vh-100 py-5 py-xl-0'>
      <section className='container-fluid h-100'>
        <div className='row h-100 align-items-center'>
          <div className='col-12 col-xl-6 text-center p-4 p-sm-5'>
            <h2 className='text-uppercase mb-2'>Login</h2>
            <p className='fz-small'>
              Don't have an account? <Link to='register'>Register</Link>
            </p>

            <form className='text-start mt-4 mt-md-0 p-sm-3 p-md-4'>
              <div className='mb-4'>
                <label className='text-uppercase'>Phone Number or Email Address</label>
                <input type='text' className='form-control bg-gray py-3' />
              </div>
              <div className='mb-4'>
                <label className='text-uppercase'>Password</label>
                <div className='input-group'>
                  <input
                    type='password'
                    className='form-control bg-gray py-3'
                    aria-describedby='passwordHelp'
                  />
                  <span className='input-group-text bg-gray border-0' id='basic-addon2'>
                    <i className='fa fa-eye-slash' aria-hidden='true'></i>
                  </span>
                </div>
                <div className='form-text text-end'>
                  <Link to='/recover'>Forgot password?</Link>
                </div>
              </div>

              <div className='mb-4'>
                <label>
                  <strong>Friendly Reminder:</strong> You are only entitled to operate ONE account.
                  Violation of this policy may result in suspension of your account and forfeiture
                  of your wins. Please see our <Link to='/terms'>Terms of Use</Link>.
                </label>
              </div>
              <Button type='secondary' size='lg' width='w-100'>
                Login
              </Button>
            </form>
          </div>
          <div className='d-none d-xl-block col-xl-6 h-100 p-0 position-fixed end-0'>
            <a href='/' className='h-100'>
              <img src='images/pattern.png' className='img-fliud h-100' alt='bidnbuy' />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
