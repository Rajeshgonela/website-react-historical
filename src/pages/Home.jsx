import Hero from "../components/Hero";
import PlacesIntro from "../components/PlacesIntro";
import TimelinesIntro from "../components/TimelinesIntro";
import About from "../components/About";
import Gallery from "../components/Gallery";
import VideoSection from "../components/VideoSection";
import Facts from "../components/Facts";
import { placesData } from "../data/Placesdata";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
  <section id="hero">
    <Hero />
  </section>

  <section id="places">
    <PlacesIntro />
  </section>

  <section id="timelines">
    <TimelinesIntro />
  </section>

  <section id="place1">
  <About title={placesData[0].name} description={placesData[0].about} />
  <Gallery images={placesData[0].images} />
  <Facts facts={placesData[0].facts} />
</section>

<section id="place2">
  <About title={placesData[1].name} description={placesData[1].about} />
  <Gallery images={placesData[1].images} />
  <Facts facts={placesData[1].facts} />
</section>

<section id="place3">
  <About title={placesData[2].name} description={placesData[2].about} />
  <Gallery images={placesData[2].images} />
  <Facts facts={placesData[2].facts} />
</section>


  <footer id="footer">
    <Footer />
  </footer>
</>

  );
}

export default Home;
