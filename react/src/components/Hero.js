import { ButtonLarge, FlexContainer } from '../components/styles/Reusabled';
import styled from 'styled-components';
import { tab } from '../components/styles/Responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 10vh;
`;

const Title = styled.h1`
  font-size: var(--title);
`;

const Desc = styled.p`
  margin: 3rem 0;
  font-size: var(--medium);
  font-weight: 500;
  letter-spacing: 0.15rem;
`;

const HeroImg = styled.div`
flex: 1;
padding: 3rem ;
flex-basis: 50%;
${tab({ display: 'none'})}
`;

const HeroText = styled.div`
flex: 1;
padding: 3rem ;
flex-basis: 50%;
${tab({ padding: '1.5rem' ,flexBasis: '100%'})};
`;

const Hero = () => {
  return (
    <Container>
      <FlexContainer align='center'>
        <HeroImg>
          <img
            src='https://images.pexels.com/photos/1371998/pexels-photo-1371998.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            className='img-fluid'
            alt='bidnbuy'
          />
        </HeroImg>
        <HeroText>
          <Title>Have You Met Our Super Hot Deals Of The Week ?</Title>
          <Desc>
            This week, we have got a lot of sleek items up on auction. We have LG 350L Chest
            Freezer, Bone Straight Hair, 100k Cash, PS5 and lots more. Imagine winning two or three
            out of these items. Oya load up your bid wallets!!
          </Desc>
          <ButtonLarge outline>Bid Now</ButtonLarge>
        </HeroText>
      </FlexContainer>
    </Container>
  );
};

export default Hero;
