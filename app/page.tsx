import Image from "next/image";
import Navbar from "./ui/Navbar";
import Hero from './ui/Hero';
import SearchForm from "./ui/components/SearchForm";
import Destinations from "./ui/Destinations";
import Search from "./ui/Search";

export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
        <Destinations />
        <Search />
    </main>
  );
}
