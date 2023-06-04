import { Outlet } from 'react-router-dom';
import './App.css';
import MenuAppBar from './components/Header';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Outlet />
    </div>
  );
}

export default App;
