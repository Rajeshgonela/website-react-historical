import Hero from "../components/Hero";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";
import VideoSection from "../components/VideoSection";
import Facts from "../components/Facts";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <About />
        <Timeline />
        <Gallery />
        <VideoSection />
        <Facts />
        <Footer />
    </div>
  );
}

export default Home;
