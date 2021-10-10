import Button from './Button';
import './Featured.css';

const Featured = () => {
  return (
    <section className='container pt-5'>
      <div className='flex-between'>
        <h3 className='title-header'>Featured Bids</h3>
        <Button type='secondary-outline'>View More</Button>
      </div>

      <div className='bid-container'>
        <div className='card bid'>
          <h5>Title</h5>
          <div className='card-body flex-column '>
            <div className='bid-image'>
              <img src='images/greek-vase.png' className='img-fluid ' alt='...' />
            </div>
            <p>Starts at 11:30 PM</p>
            <p className='fw-bold'>00:00:49:35</p>
            <Button>Bid Now</Button>
          </div>
        </div>

        <div className='card bid'>
          <h5>Title</h5>
          <div className='card-body flex-column '>
            <div className='bid-image'>
              <img src='images/greek-vase.png' className='img-fluid ' alt='...' />
            </div>
            <p>Starts at 10:30 PM</p>
            <p className='fw-bold'>00:00:49:35</p>
            <Button>Bid Now</Button>
          </div>
        </div>

        <div className='card bid'>
          <h5>Title</h5>
          <div className='card-body flex-column '>
            <div className='bid-image'>
              <img src='images/greek-vase.png' className='img-fluid ' alt='...' />
            </div>
            <p>Starts at 10:30 PM</p>
            <p className='fw-bold'>00:00:49:35</p>
            <Button>Bid Now</Button>
          </div>
        </div>

        <div className='card bid'>
          <h5>Title</h5>
          <div className='card-body flex-column '>
            <div className='bid-image'>
              <img src='images/greek-vase.png' className='img-fluid ' alt='...' />
            </div>
            <p>Starts at 10:30 PM</p>
            <p className='fw-bold'>00:00:49:35</p>
            <Button>Bid Now</Button>
          </div>
        </div>

        <div className='card bid'>
          <h5>Title</h5>
          <div className='card-body flex-column '>
            <div className='bid-image'>
              <img src='images/greek-vase.png' className='img-fluid ' alt='...' />
            </div>
            <p>Starts at 10:30 PM</p>
            <p className='fw-bold'>00:00:49:35</p>
            <Button>Bid Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
