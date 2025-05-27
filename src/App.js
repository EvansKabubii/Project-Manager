import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PollSummary from './components/PollSummary';
import './App.css';

const pollDataList = [
  {
    name: 'Favorite Programming Language',
    options: [
      { label: 'JavaScript', percent: 45, color: '#fbbf24' },
      { label: 'Python', percent: 30, color: '#34d399' },
      { label: 'Java', percent: 15, color: '#60a5fa' },
      { label: 'C#', percent: 10, color: '#f472b6' },
    ],
  },
  {
    name: 'Best Frontend Framework',
    options: [
      { label: 'React', percent: 50, color: '#60a5fa' },
      { label: 'Vue', percent: 20, color: '#34d399' },
      { label: 'Angular', percent: 18, color: '#fbbf24' },
      { label: 'Svelte', percent: 12, color: '#f472b6' },
    ],
  },
  {
    name: 'Preferred Code Editor',
    options: [
      { label: 'VS Code', percent: 70, color: '#60a5fa' },
      { label: 'Sublime', percent: 10, color: '#fbbf24' },
      { label: 'Atom', percent: 8, color: '#f472b6' },
      { label: 'Vim', percent: 12, color: '#34d399' },
    ],
  },
  {
    name: 'Favorite OS for Dev',
    options: [
      { label: 'Windows', percent: 40, color: '#60a5fa' },
      { label: 'macOS', percent: 25, color: '#fbbf24' },
      { label: 'Linux', percent: 35, color: '#34d399' },
    ],
  },
];

function App() {
  return (
    <div className="App" style={{ background: '#111', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '60vh',
        padding: '40px 0'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
        }}>
          {pollDataList.map((poll, idx) => (
            <PollSummary key={poll.name} pollData={poll} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
