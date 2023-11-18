import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = useSelector(state => state.projectReducer)
  return (
    <div>
      <button><Link to='/projects/add'>Add</Link></button>
      {
        projects.data === null ? <h1 className="text-3xl">Loading...</h1> :
          <>
            {
              projects.data.length === 0 ? <h1 className="text-3xl">No data to display...</h1> :
                <>
                  {
                    projects.data.map((key) => (
                      <div className="max-w-md h-auto mx-auto bg-white rounded-xl m-5 shadow-md overflow-hidden md:max-w-7xl">
                        <div className="md:flex">
                          <div className="md:shrink-0">
                            <div className="w-full text-3xl pl-5 object-cover md:h-64 ... flex items-center justify-center md:w-64 bg-purple-200">{key.title}</div>
                          </div>
                          <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-purple-500 font-semibold mb-3">{key.description}</div>
                            <div className="block mt-1 text-lg leading-tight font-medium text-black ... flex flex-row max-w-full overflow-x-auto m-3">
                              <span className="p-2 mx-2">Skills: </span> {key.tags.map((tag) => (
                                <div className="p-2 bg-gray-200 rounded-2xl mx-2"> {tag} </div>
                              ))}
                            </div>
                            <p className="ml-3">Details :</p>
                            <p className="mt-2 text-slate-500">
                              <pre>{key.details}</pre>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </>
            }
          </>
      }
    </div>
  )
}

export default Projects