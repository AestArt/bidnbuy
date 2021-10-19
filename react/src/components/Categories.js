import { FlexContainer, FlexItem } from './styles/Reusabled';
// import styled from 'styled-components';

const Categories = () => {
  return (
    <section className='container'>
      <h1 className='fz-large'>Popular Categories</h1>
      <FlexContainer>
        <FlexItem>Category</FlexItem>
        <FlexItem>Category</FlexItem>
      </FlexContainer>
      <FlexContainer column>
        <FlexItem>Category</FlexItem>
        <FlexItem>Category</FlexItem>
        <FlexItem>Category</FlexItem>
      </FlexContainer>
    </section>
  );
};

export default Categories;
