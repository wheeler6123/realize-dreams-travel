import Navbar from "./ui/Navbar";
import Hero from './ui/Hero';
import Destinations from "./ui/Destinations";
import Search from "./ui/Search";
import Selects from "./ui/Selects";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
        <Destinations />
        <Search />
        <Selects />
        <Footer />
    </main>
  );
}
