import React from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const About = () => {
  let experience = useSelector(state => state.experienceReducer)
  let education = useSelector(state => state.educationReducer)
  let skills = useSelector(state => state.skillsReducer)
  let achievements = useSelector(state => state.achievementsReducer)

  return (
    <div className="about">
      <div className="experience">
        <h4 class="text-3xl font-normal leading-normal mt-4 bg-gray-200 mb-2 p-5 text-zinc-800">
          Experience
          <button className="bg-sky-700"><Link to='/about/experience'> + </Link></button>
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
                          <p className="text-gray-500 text-lg">
                            <pre>{key.details}</pre>
                          </p>
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
          <button className="bg-sky-700"><Link to='/about/education'> + </Link></button>
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
                          </p>
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
          <button className="bg-sky-700"><Link to='/about/skills'> + </Link></button>
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
                          <div className="p-2 rounded-2xl bg-purple-200 font-bold m-2">{key.skill}</div>
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
          <button className="bg-sky-700"><Link to='/about/achievements'> + </Link></button>
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
                          <div className="p-2 rounded-2xl bg-purple-200 font-bold m-2">{key.achievement}</div>
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