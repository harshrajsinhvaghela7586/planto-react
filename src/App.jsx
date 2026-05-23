import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import TopSelling from "./sections/TopSelling";
import CustomerReview from "./sections/CustomerReview";
import BestPlant from "./sections/BestPlants";

import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#06150c] via-[#071b0f] to-[#041008] overflow-hidden">

      <div className="max-w-[1600px] mx-auto">

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