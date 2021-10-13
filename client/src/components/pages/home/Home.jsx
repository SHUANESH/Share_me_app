import "./home.scss";
import News from "../../features/news/News";
import About from "../../features/about/About";
import Contact from '../contact/Contact'
import Footer from "../../features/footer/Footer"
const Home = () => {
  return (
    <>
      <About />
      <News />
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
