import Hero from "../components/Hero";
import PlacesIntro from "../components/PlacesIntro";
import TimelinesIntro from "../components/TimelinesIntro";
import About from "../components/About";
import Gallery from "../components/Gallery";
import PlaceHeader from "../components/PlaceHeader";
import LocationMap from "../components/LocationMap";
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
  <PlaceHeader
    title={placesData[0].name}
    subtitle={placesData[0].subtitle}
  />
  <About
    title={placesData[0].name}
    description={placesData[0].about}
    image={placesData[0].aboutImage}
  />
  <Gallery images={placesData[0].images} />
  <VideoSection video={placesData[0].video} />
   <section className="bg-black py-16">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid items-stretch gap-12 md:grid-cols-2">

      {/* Map */}
      <LocationMap
        title={placesData[0].name}
        mapSrc={placesData[0].map}
      />

      {/* Facts */}
      <Facts facts={placesData[0].facts} />

    </div>
  </div>
</section>
</section>

<section id="place2">
  <PlaceHeader
    title={placesData[1].name}
    subtitle={placesData[1].subtitle}
  />
 <About
  title={placesData[1].name}
  description={placesData[1].about}
  image={placesData[1].aboutImage}
/>
  <Gallery images={placesData[1].images} />
  <VideoSection video={placesData[1].video} />
   <section className="bg-black py-16">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid items-stretch gap-12 md:grid-cols-2">

      {/* Map */}
      <LocationMap
        title={placesData[1].name}
        mapSrc={placesData[1].map}
      />

      {/* Facts */}
      <Facts facts={placesData[1].facts} />

    </div>
  </div>
</section>
</section>

<section id="place3">
  <PlaceHeader
    title={placesData[2].name}
    subtitle={placesData[2].subtitle}
  />
    <About title={placesData[2].name} description={placesData[2].about} image={placesData[2].aboutImage} />
  <Gallery images={placesData[2].images} />
  <VideoSection video={placesData[2].video} />
      <section className="bg-black py-16">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid items-stretch gap-12 md:grid-cols-2">

      {/* Map */}
      <LocationMap
        title={placesData[2].name}
        mapSrc={placesData[2].map}
      />

      {/* Facts */}
      <Facts facts={placesData[2].facts} />

    </div>
  </div>
</section>
</section>


  <footer id="footer">
    <Footer />
  </footer>
</>

  );
}

export default Home;
