import './App.css';
import MenuAppBar from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Outlet />
    </div>
  );
}

export default App;
