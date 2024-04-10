import Image from "next/image";
import Navbar from "./ui/Navbar";
import Hero from './ui/Hero';

export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
    </main>
  );
}
