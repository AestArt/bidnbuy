import FeaturedBids from '../components/Featured';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Steps from '../components/Steps';

const HomePage = () => {
  return (
    <main>
      <Header/>
      <Hero />
      <Steps />
      <FeaturedBids />
      <Footer />
    </main>
  );
};

export default HomePage;
