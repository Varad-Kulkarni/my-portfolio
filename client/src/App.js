import './App.css';
import { Router } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="App">
        <Navbar />
        <AllRoutes />
    </div>
  );
}

export default App;
