import Button from '../components/Button';

const Recover = () => {
  return (
    <main className='vh-100 py-5 py-xl-0'>
      <section className='container-fluid h-100'>
        <div className='row h-100 align-items-center'>
          <div className='col-12 col-xl-6 text-center p-4 p-sm-5'>
            <h2 className='text-uppercase mb-2'>REcover password</h2>

            <form className='text-start mt-4 mt-md-0 p-sm-3 p-md-4'>
              <div className='mb-4'>
                <label className='text-uppercase'>Email Address</label>
                <input type='text' className='form-control bg-gray py-3' />
                <div id='emailHelp' className='form-text'>
                  We'll never share your email with anyone else.
                </div>
              </div>

              <Button type='secondary' size='lg' width='w-100'>
                Recover Password
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

export default Recover;
