import Hero from './ui/Hero';
import Destinations from "./ui/Destinations";
import Search from "./ui/Search";
import Selects from "./ui/Selects";

export default function Home() {
  return (
    <main>
        <Hero />
        <Destinations />
        <Search />
        <Selects />
    </main>
  );
}
