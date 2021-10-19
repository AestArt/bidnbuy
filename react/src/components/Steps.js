import styled from 'styled-components';
import { FlexContainer, FlexItem } from '../components/styles/Reusabled';

const Step = styled.div`
  display: flex;
  flex-direction: column;
  width: 7rem;
  border: 3px solid #000;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  color: var(--dark);
`;

const Steps = () => {
  return (
    <section className='py-4 mb-5'>
      <div className='container'>
        <FlexContainer>
          <FlexItem className='flex-column'>
            <Step>
              <img src='images/greek-vase.png' className='img-fluid' alt='...' />
            </Step>
              <StepDesc>Sign Up on BidnBuy.com</StepDesc>
          </FlexItem>
          <FlexItem className='flex-column'>
            <Step >
              <img src='images/greek-vase.png' className='img-fluid' alt='...' />
            </Step>
            <StepDesc>Purchase a BidPack</StepDesc>
          </FlexItem>
          <FlexItem className='flex-column'>
            <Step>
              <img src='images/greek-vase.png' className='img-fluid' alt='...' />
            </Step>
            <StepDesc>Start Bidding</StepDesc>
          </FlexItem>
          <FlexItem className='flex-column'>
            <Step className='step'>
              <img src='images/greek-vase.png' className='img-fluid' alt='...' />
            </Step>
            <StepDesc>Claim Win/Buy It Now</StepDesc>
          </FlexItem>
        </FlexContainer>
      </div>
    </section>
  );
};

export default Steps;
