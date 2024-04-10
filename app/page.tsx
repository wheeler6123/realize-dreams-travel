import Image from "next/image";
import Navbar from "./ui/Navbar";
import Hero from './ui/Hero';
import SearchForm from "./ui/components/SearchForm";
import Destinations from "./ui/components/Destinations";

export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
        <Destinations />
    </main>
  );
}
