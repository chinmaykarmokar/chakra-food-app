// Component Imports
import Nav from "../components/nav";
import CarouselDiv from "../components/carousel";
import About from "../components/about";
import ParallaxDiv from "../components/parallax";
import ContactUs from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Nav />

      <br/><br/><br/>

      <CarouselDiv />

      <About />

      <ParallaxDiv />

      <ContactUs />

      <Footer />
    </div>
  )
}