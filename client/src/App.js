import './App.css';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import NavigationBar from './components/NavigationBar/NavigationBar'
import AllRoutes from './AllRoutes';
import Footer from './components/Footer/Footer'
import { getAllExperience, getAllEducation, getAllSkills, getAllAchievements } from './actions/about';
import { getAllProjects } from './actions/projects';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllExperience())
    dispatch(getAllEducation())
    dispatch(getAllSkills())
    dispatch(getAllAchievements())
    dispatch(getAllProjects())
  }, [dispatch])

  return (
    <div className="App">
      <NavigationBar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
