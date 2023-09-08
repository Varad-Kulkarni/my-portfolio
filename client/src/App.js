import './App.css';
import { Router } from 'react-router-dom'

import NavigationBar from './components/NavigationBar/NavigationBar'
import AllRoutes from './AllRoutes';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <AllRoutes />
        <Footer />
    </div>
  );
}

export default App;
