import "./App.css";
import Home from "./components/Home/Home";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import VideoSlider from "./components/VideoSlider/VideoSlider";
import GoToTopButton from "./components/GoToTop/GoToTopButton";



function App() {
  return (
    <div className="App">
      
      <Home />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <VideoSlider />
      <Footer />
      <GoToTopButton />
    </div>
  );
}

export default App;
