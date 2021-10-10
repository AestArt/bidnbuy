import './Steps.css';

const Steps = () => {
  return (
    <section className='py-4 bg--secondary text-light mb-5'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='row col justify-content-around text-center text-capitalize fw-bold'>
            <div className='col-md-3 col-sm-6 flex-column'>
              <div className='step'>
                <img src='images/greek-vase.png' className='img-fluid' alt='...' />
              </div>
              <p>Sign Up on Kobobid.com</p>
            </div>
            <div className='col-md-3 col-sm-6 flex-column'>
              <div className='step'>
                <img src='images/greek-vase.png' className='img-fluid' alt='...' />
              </div>
              <p>Purchase a BidPack</p>
            </div>
            <div className='col-md-3 col-sm-6 flex-column'>
              <div className='step'>
                <img src='images/greek-vase.png' className='img-fluid' alt='...' />
              </div>
              <p>Start Bidding</p>
            </div>
            <div className='col-md-3 col-sm-6 flex-column'>
              <div className='step'>
                <img src='images/greek-vase.png' className='img-fluid' alt='...' />
              </div>
              <p>Claim Win/Buy It Now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
