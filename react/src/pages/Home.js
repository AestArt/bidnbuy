// import Category from '../components/Categories';
import FeaturedBids from '../components/Featured';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <main>
      <Header/>
      <Hero />
      {/* <Category /> */}
      <FeaturedBids />
      <Newsletter/>
      <Footer />
    </main>
  );
};

export default HomePage;
