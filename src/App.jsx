// import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="sm:px-16 px-6 flex justify-center items-center">
      <div className="w-full xl:max-w-[1280px]">
        <Navbar />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start">
      <div className="w-full xl:max-w-[1280px]">
        <Hero />
      </div>
    </div>
    
    <div className="bg-primary flex justify-center items-start">
      <div className="w-full sm:px-16 px-6  xl:max-w-[1280px]">
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
