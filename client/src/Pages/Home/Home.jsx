import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {
  const data = [
    {
      title: 'E-Cart',
      description: 'Manage Products In Various Categories,\nMaintain Admin Panel,\nUser Profiles,\nFeedback And Response'
    },
    {
      title: 'Stack Overflow Clone',
      description: 'User can create new account for login,\nUser can upload question or give answer,\nUser can upvote or downvote question,\nUser can edit his profile,\nUser can see others profile also',
    },
    {
      title: 'Employee Management System',
      description: 'This is employee management system for admin,\nHere, admin can add, update, remove or view employee details,\nAdmin only login if he/she have proper username or password,\nFor this I use java swings, Mysql and Vscode as editor.',
    },
    {
      title: '',
      description: 'link',
    },
  ];

  return (
    <div className='home'>
      <div className="outer-description">
        <div className="description">
          <div className="name">Varad Kedarrao Kulkarni</div>
          <div className="role">Passionate Software Engineer</div>
          <div className="buttons">
            <div className="button experience"><button>Explore my Experience</button></div>
            <div className="button contact-me"><button>Contact me</button></div>
          </div>
        </div>
      </div>

      <div className="container">
        {data.slice(0, 3).map((item, index) => (
          <div className="box" key={index}>
            <h4 className="h4-title">{item.title}</h4>
            <p className="p-description">{item.description}</p>
          </div>
        ))}
        <div className="box link-box">
          <h4 className="h4-title link-h4-title"></h4>
          <p className="p-description link-p-description"><Link to='/projects'>more...</Link></p>
        </div>
      </div>
    </div>

  )
}

export default Home