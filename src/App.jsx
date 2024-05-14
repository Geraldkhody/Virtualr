import Navbar from "./component/Navbar";
import Herosection from "./component/Herosection";
import Featuresection from "./component/Featuresection";
import Workflow from "./component/Workflow";
import Pricing from "./component/Pricing";
import Testimonals from "./component/Testimonals";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-20 px-6">
        <Herosection />
        <Featuresection />
        <Workflow />
        <Pricing />
        <Testimonals />
        <Footer />
      </div>
    </>
  );
};

export default App;
