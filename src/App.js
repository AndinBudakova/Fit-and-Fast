import "./App.css";
import Home from "./components/Home/Home";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import  RandomWorkout from "./components/RandomWorkout"
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div className="App">
      <Home />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <RandomWorkout />
      <Footer />
    </div>
  );
}

export default App;
