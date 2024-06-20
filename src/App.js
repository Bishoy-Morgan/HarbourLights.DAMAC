import './App.css';
import Lenis from 'lenis'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MainSection from './Components/MainSection';
import Features from './Components/Features';
import Amenities from './Components/Amenities';
import ImageSlider from './Components/ImageSlider';
import Footer from './Components/Footer';

function App() {
  gsap.registerPlugin(ScrollTrigger)
  const lenis = new Lenis()
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  return (
    <>
      <MainSection />
      <Features />
      <Amenities />
      <ImageSlider />
      <Footer />
    </>
  );
}

export default App;
