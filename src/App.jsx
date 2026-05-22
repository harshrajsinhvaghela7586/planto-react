import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import TopSelling from "./sections/TopSelling";
import CustomerReview from "./sections/CustomerReview";
import BestPlant from "./sections/BestPlants";

import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#071b0f] via-[#0b1f13] to-[#071b0f] overflow-hidden">

      <div className="max-w-[1500px] mx-auto">

        <Navbar />

        <Hero />

        <TopSelling />

        <CustomerReview />

        <BestPlant />

        <Footer />

      </div>

    </main>
  );
}

export default App;