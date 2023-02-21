import "./App.css";
import Access from "./components/access/Access";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Pricing from "./components/pricing/Pricing";
import PricingCards from "./components/pricingcards/PricingCards";
import Startups from "./components/startups/Startups";


function App() {
  return (
    <div className="App">
      <Header />
      <Pricing />
      <PricingCards />
      <Startups />
      <Access />
      <Footer />
    </div>
  );
}

export default App;
