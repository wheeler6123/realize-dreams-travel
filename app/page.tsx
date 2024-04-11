import Image from "next/image";
import Navbar from "./ui/Navbar";
import Hero from './ui/Hero';
import SearchForm from "./ui/components/SearchForm";
import Destinations from "./ui/Destinations";
import Search from "./ui/Search";
import Selects from "./ui/Selects";
import YtSlider from "./ui/components/YtSlider";

export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
        <Destinations />
        <Search />
        <Selects />
        <YtSlider />
    </main>
  );
}
