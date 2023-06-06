import './App.css';
import MenuAppBar from './components/Header';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Home />
    </div>
  );
}

export default App;
