import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImageSection from './components/ImageSection';
import './App.css';

function App() {
  return (
    <div className="App" style={{ background: '#111', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <ImageSection />
    </div>
  );
}

export default App;
