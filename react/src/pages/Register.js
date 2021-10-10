import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Register = () => {
  return (
    <main className='vh-100 py-5 py-xl-0'>
      <section className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-xl-6 text-center p-4 p-sm-5'>
            <h2 className='text-uppercase mb-2'>Register</h2>
            <p className='fz-small'>
              Already have an account? <Link to='login'>Login</Link>
            </p>

            <form className='text-start mt-4 mt-md-0 p-sm-3 p-md-4'>
              <div className='mb-4'>
                <label className='text-uppercase'>First Name</label>
                <input type='text' className='form-control py-xl-3 py-sm-1 bg-gray' placeholder='e.g: John' />
              </div>

              <div className='mb-4'>
                <label className='text-uppercase'>Last Name</label>
                <input type='text' className='form-control py-xl-3 py-sm-1 bg-gray' placeholder='e.g: Doe' />
              </div>

              <div className='mb-4'>
                <label className='text-uppercase'>Username</label>
                <input type='text' className='form-control py-xl-3 py-sm-1 bg-gray' placeholder='e.g: johndoe' />
              </div>

              <div className='mb-4'>
                <label className='text-uppercase'>Email</label>
                <input
                  type='email'
                  className='form-control py-xl-3 py-sm-1 bg-gray'
                  placeholder='e.g: johndoe@example.com'
                  aria-describedby='emailHelp'
                />
                <div id='emailHelp' className='form-text'>
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className='mb-4'>
                <label className='text-uppercase'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  className='form-control py-xl-3 py-sm-1 bg-gray'
                  id='registerPhone'
                  placeholder='e.g: +23480********'
                />
              </div>

              <div className='mb-4'>
                <label className='text-uppercase'>Password</label>
                <input
                  type='password'
                  className='form-control py-xl-3 py-sm-1 bg-gray'
                  aria-describedby='passwordHelp'
                />
                <div id='passwordHelp' className='form-text fz-small'>
                  Password must contain at least 1 uppercase letter.
                  <br />
                  Password must contain at least 1 number.
                  <br />
                  Password must contain at least 1 special character.
                  <br />
                  Password must contain at least 8 characters.
                  <br />
                </div>
              </div>

              <div className='mb-4'>
                <label className='text-uppercase'>Confirm Password</label>
                <input type='password' className='form-control py-xl-3 py-sm-1 bg-gray' />
              </div>

              <div className='mb-4'>
                <label className='text-uppercase'>Referral Code (Optional)</label>
                <input type='text' className='form-control py-xl-3 py-sm-1 bg-gray' />
              </div>

              <div className='form-check mb-4'>
                <input className='form-check-input' type='checkbox' value='' />
                <label className='form-check-label'>
                  Default checkbox This site is only intended for use by persons who are
                  <strong>18 years or older</strong> and is
                  <strong>restricted to one account per individual</strong>. By signing up, you
                  hereby agree to operate only one user account. You also confirm that you are 18+
                  and that you have read and agree to our <Link to='/terms'>Terms of Use</Link> and
                  <Link to='/privacy'>Privacy Policy</Link>.
                </label>
              </div>
              <div className='form-check mb-4'>
                <input className='form-check-input' type='checkbox' value='' />
                <label className='form-check-label'>
                  I want updates on hot auctions, incredible deals, bidding tips and more.
                </label>
              </div>

              <Button type='secondary' size='lg' width='w-100'>
                Login
              </Button>
            </form>
          </div>
          <div className='d-none d-lg-block col-lg-6 h-100 p-0 position-fixed end-0'>
            <Link to='/' className='h-100'>
              <img src='images/pattern.png' className='img-fliud h-100' alt='bidnbuy' />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
