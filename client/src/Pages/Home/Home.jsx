import React from 'react'

import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="outer-description">
        <div className="description">
          <div className="name">Varad Kedarrao Kulkarni</div>
          <div className="role">Passionate Software Engineer</div>
          <div className="buttons">
            <div className="experience"><button>Explore my Experience</button></div>
            <div className="contact-me"><button>Contact me</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home