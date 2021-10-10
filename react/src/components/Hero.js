import './Hero.css';
import Button from './Button';

const Hero = () => {
  return (
    <section className='container main-content vh-100'>
      <div className='row align-items-center justify-content-between h-100'>
        <div className='col-lg-5 col-12'>
          <h2>Have You Met Our Super Hot Deals Of The Week ?</h2>
          <p>
            This week, we have got a lot of sleek items up on auction. We have LG 350L Chest
            Freezer, Bone Straight Hair, 100k Cash, PS5 and lots more. Imagine winning two or three
            out of these items. Oya load up your bid wallets!!
          </p>
          <Button size={'lg'}>Bid Now</Button>
        </div>
        <div className='col-lg-6 col-12 order-first'>
          <img src='images/cover.jpg' className='img-fluid' alt='...' />
        </div>
      </div>
      {/* <div id='hero-carousel' className='carousel slide h-100' data-bs-ride='carousel'>
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#hero-carousel'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#hero-carousel'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#hero-carousel'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner h-100 text-center'>
          <div className='carousel-item active'>
            <img src='images/cover.jpg' className='img-fluid' alt='...' />
            <div className='carousel-caption text-light'>
              <h2>Have You Met Our Super Hot Deals Of The Week ?</h2>
              <p>
                This week, we have got a lot of sleek items up on auction. We have LG 350L Chest
                Freezer, Bone Straight Hair, 100k Cash, PS5 and lots more. Imagine winning two or
                three out of these items. Oya load up your bid wallets!!
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img src='images/cover.jpg' className='img-fluid' alt='...' />
            <div className='carousel-caption text-light'>
              <h2>Have You Met Our Super Hot Deals Of The Week ?</h2>
              <p>
                This week, we have got a lot of sleek items up on auction. We have LG 350L Chest
                Freezer, Bone Straight Hair, 100k Cash, PS5 and lots more. Imagine winning two or
                three out of these items. Oya load up your bid wallets!!
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img src='images/cover.jpg' className='img-fluid' alt='...' />
            <div className='carousel-caption text-light'>
              <h2>Have You Met Our Super Hot Deals Of The Week ?</h2>
              <p>
                This week, we have got a lot of sleek items up on auction. We have LG 350L Chest
                Freezer, Bone Straight Hair, 100k Cash, PS5 and lots more. Imagine winning two or
                three out of these items. Oya load up your bid wallets!!
              </p>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#hero-carousel'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#hero-carousel'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div> */}
    </section>
  );
};

export default Hero;
