import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { deleteExperience, deleteEducation, deleteSkill, deleteAchievement } from '../../actions/about'

const About = () => {
  const experience = useSelector(state => state.experienceReducer)
  const education = useSelector(state => state.educationReducer)
  const skills = useSelector(state => state.skillsReducer)
  const achievements = useSelector(state => state.achievementsReducer)
  const User = useSelector((state) => (state.currentUserReducer));

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = (type, id) => {
    switch (type) {
      case 'experience':
        dispatch(deleteExperience(id, navigate))
        break;

      case 'education':
        dispatch(deleteEducation(id, navigate))
        break;

      case 'skill':
        dispatch(deleteSkill(id, navigate))
        break;

      case 'achievement':
        dispatch(deleteAchievement(id, navigate))
        break;

      default:
        console.log(`choose correct type...you choosen ${type}`)
    }
  }

  const handleEdit = (type, key) => {
    switch (type) {
      case 'experience':
        navigate('/about/experience', { state: { key, type } })
        break;

      case 'education':
        navigate('/about/education', { state: { key, type } })
        break;

      case 'skills':
        navigate('/about/skills', { state: { key, type } })
        break;

      case 'achievements':
        navigate('/about/achievements', { state: { key, type } })
        break;

      default:
        console.log('no options selected...')
    }
  }

  return (
    <div className="about">
      <div className="experience">
        <h4 class="text-3xl font-normal leading-normal mt-4 bg-gray-200 mb-2 p-5 text-zinc-800">
          Experience
          {
            User !== null && (
              <button className="bg-sky-700 font-sm hover:bg-sky-900 text-white mx-3 px-2 rounded-full"><Link to='/about/experience'> Add </Link></button>
            )
          }
        </h4>
        {
          experience.data === null ? <h1 className="text-3xl">Loading...</h1> :
            <>
              {
                experience.data.length === 0 ? <h1 className="text-3xl">No data to display...</h1> :
                  <>
                    {
                      experience.data.map((key) => (
                        <div className="container mx-auto bg-purple-50 rounded-xl shadow border p-4 m-3">
                          <p className="text-2xl text-gray-700 font-bold">
                            {key.title} at <span className="text-1xl text-purple-500">{key.company}</span>
                          </p>
                          <p className="text-1xl mb-2"> <span>{key.fromDate}</span> - <span>{key.toDate}</span></p>
                          <p className="text-gray-500 text-lg max-w-full overflow-x-auto">
                            <pre>{key.details}</pre>
                          </p>
                          {
                            User !== null && (
                              <>
                                <button className='bg-gray-700 hover:bg-gray-900 text-white mx-3 px-2 rounded-full' onClick={() => handleEdit('experience', key)}>edit</button>
                                <button className='bg-red-700 hover:bg-red-900 text-white mx-3 px-2 rounded-full' onClick={() => { handleDelete('experience', key._id) }}>delete</button>
                              </>
                            )
                          }
                        </div>
                      ))
                    }
                  </>
              }
            </>
        }
      </div>
      <div className="education">
        <h4 class="text-3xl font-normal leading-normal mt-4 bg-gray-200 mb-2 p-5 text-zinc-800">
          Education
          {
            User !== null && (
              <>
                <button className="bg-sky-700 hover:bg-sky-900 text-white mx-3 px-2 rounded-full"><Link to='/about/education'> Add </Link></button>
              </>
            )
          }
        </h4>
        {
          education.data === null ? <h1 className='text-3xl'>Loading...</h1> :
            <>
              {
                education.data.length === 0 ? <h1 className='text-3xl'>No data to display...</h1> :
                  <>
                    {
                      education.data.map((key) => (
                        <div className="container mx-auto bg-purple-50 rounded-xl shadow border p-4 m-3">
                          <p className="text-2xl text-purple-500 font-bold">
                            {key.institute}
                          </p>
                          <p className="text-1xl mb-2"> <span>{key.fromDate}</span> - <span>{key.toDate}</span></p>
                          <p className="text-gray-500 text-lg">
                            <pre>Degree = {key.degree}</pre>
                            <pre>Total Marks = {key.marks}</pre>
                            <pre>Details:
                              {key.description}
                            </pre>
                          </p>
                          {
                            User !== null && (
                              <>
                                <button className='bg-gray-700 hover:bg-gray-900 text-white mx-3 px-2 rounded-full' onClick={() => { handleEdit('education', key) }}>edit</button>
                                <button className='bg-red-700 hover:bg-red-900 text-white mx-3 px-2 rounded-full' onClick={() => { handleDelete('education', key._id) }}>delete</button>
                              </>
                            )
                          }
                        </div>
                      ))
                    }
                  </>
              }
            </>
        }
      </div>
      <div className="skills">
        <h4 class="text-3xl font-normal leading-normal mt-4 bg-gray-200 mb-2 p-5 text-zinc-800">
          Skills
          {
            User !== null && (
              <>
                <button className="bg-sky-700 hover:bg-sky-900 text-white mx-3 px-2 rounded-full"><Link to='/about/skills'> Add </Link></button>
              </>
            )
          }
        </h4>
        <div className="p-3 flex flex-row ... max-w-full overflow-x-auto">
          {
            skills.data === null ? <h1 className='text-3xl'>Loading...</h1> :
              <>
                {
                  skills.data.length === 0 ? <h1 className='text-3xl'>No data to display...</h1> :
                    <>
                      {
                        skills.data.map((key) => (
                          <div className="p-2 rounded-2xl bg-purple-200 font-bold m-2">
                            {key.skill}
                            {
                              User !== null && (
                                <>
                                  <button className='bg-gray-700 hover:bg-gray-900 text-white mx-1 px-1 rounded-full' onClick={() => { handleEdit('skills', key) }}>e</button>
                                  <button className='bg-red-700 hover:bg-red-900 text-white mx-1 px-1 rounded-full' onClick={() => { handleDelete('skill', key._id) }}>-</button>
                                </>
                              )
                            }
                          </div>
                        ))
                      }
                    </>
                }
              </>
          }
        </div>
      </div>
      <div className="achievements">
        <h4 class="text-3xl font-normal leading-normal mt-4 bg-gray-200 mb-2 p-5 text-zinc-800">
          Achievements
          {
            User !== null && (
              <>
                <button className="bg-sky-700 hover:bg-sky-900 text-white mx-3 px-2 rounded-full"><Link to='/about/achievements'> Add </Link></button>
              </>
            )
          }
        </h4>
        <div className="p-3">
          {
            achievements.data === null ? <h1 className='text-3xl'>Loading...</h1> :
              <>
                {
                  achievements.data.length === 0 ? <h1 className='text-3xl'>No data to display...</h1> :
                    <>
                      {
                        achievements.data.map((key) => (
                          <div className="p-2 rounded-2xl bg-purple-200 font-bold m-2">
                            {key.achievement}
                            {
                              User !== null && (
                                <>
                                  <button className='bg-gray-700 hover:bg-gray-900 text-white mx-3 px-2 rounded-full' onClick={() => { handleEdit('achievements', key) }}>edit</button>
                                  <button className='bg-red-700 hover:bg-red-900 text-white mx-3 px-2 rounded-full' onClick={() => { handleDelete('achievement', key._id) }}>delete</button>
                                </>
                              )
                            }
                          </div>
                        ))
                      }
                    </>
                }
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default About