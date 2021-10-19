import { Button, FlexContainer } from '../components/styles/Reusabled';
import styled from 'styled-components';
import { mobile, tab } from '../components/styles/Responsive'

const BidContainer = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  ${tab({ 
    gridTemplateColumns: 'repeat(3, 1fr)',
  })}
  ${mobile({ 
    gridTemplateColumns: 'repeat(2, 1fr)',
  })};
`;

const Bids = styled.div`
  border-radius: 0;
  padding: 1rem 0;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  text-align: center;

  p {
    font-size: var(--small);
  }
`;

const Featured = () => {
  const bids = [
    {
      id: 1,
      title: 'Title 1',
      img: 'https://images.pexels.com/photos/1371998/pexels-photo-1371998.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      startsAt: '10:00 AM',
      time: '00:00:49:35',
    },
    {
      id: 2,
      title: 'Title 2',
      img: 'https://images.pexels.com/photos/1371998/pexels-photo-1371998.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      startsAt: '10:00 AM',
      time: '00:00:49:35',
    },
    {
      id: 3,
      title: 'Title 3',
      img: 'https://images.pexels.com/photos/1371998/pexels-photo-1371998.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      startsAt: '10:00 AM',
      time: '00:00:49:35',
    },
    {
      id: 4,
      title: 'Title 4',
      img: 'https://images.pexels.com/photos/1371998/pexels-photo-1371998.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      startsAt: '10:00 AM',
      time: '00:00:49:35',
    },
    {
      id: 5,
      title: 'Title 5',
      img: 'https://images.pexels.com/photos/1371998/pexels-photo-1371998.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      startsAt: '10:00 AM',
      time: '00:00:49:35',
    },
  ];
  
  return (
    <section className='container pt-5'>
      <FlexContainer justify='space-between'>
        <h1 className='fz-large'>Featured Bids</h1>
        <Button outline>View All</Button>
      </FlexContainer>

      <BidContainer>
        {bids.map((bid) => (
          <Bids className='card' key={bid.id}>
          <h5>{bid.title}</h5>
          <div className='card-body flex-column'>
            <div>
              <img
                src={bid.img}
                className='img-fluid '
                alt='...'
              />
            </div>
            <p>Starts at {bid.startsAt}</p>
            <p className='fw-bold'>{bid.time}</p>
            <Button outline>Bid Now</Button>
          </div>
        </Bids>
        ))}
        
      </BidContainer>
    </section>
  );
};

export default Featured;
