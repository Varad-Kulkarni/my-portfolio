import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { deleteProject } from '../../actions/projects'

const Projects = () => {
  const projects = useSelector(state => state.projectReducer)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (type, id) => {
    dispatch(deleteProject(id, navigate))
  }

  const handleEdit = (type, key) => {
    navigate('/projects/add', { state: { key, type }})
  }

  return (
    <div>
      <button className="bg-sky-700 hover:bg-sky-900 text-white mx-3 px-2 rounded-full"><Link to='/projects/add'>Add</Link></button>
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
                            <div className="w-full text-3xl pl-5 object-cover md:h-64 ... flex items-center justify-center md:w-64 bg-purple-200">
                              {key.title}
                            </div>
                          </div>
                          <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-purple-500 font-semibold mb-3">{key.description}</div>
                            <div className="block mt-1 text-lg leading-tight font-medium text-black ... flex flex-row max-w-full overflow-x-auto m-3">
                              <span className="p-2 mx-2">Skills: </span> {key.tags.map((tag) => (
                                <div className="p-2 bg-gray-200 rounded-2xl mx-2"> {tag} </div>
                              ))}
                            </div>
                            <p className="ml-3">Details :</p>
                            <p className="mt-2 text-slate-500 max-w-full overflow-x-auto">
                              <pre>{key.details}</pre>
                            </p>
                            <button className='bg-gray-700 hover:bg-gray-900 text-white mx-3 px-2 rounded-full' onClick={() => {handleEdit('ts/add', key)}}>edit</button>
                            <button className='bg-red-700 hover:bg-red-900 text-white mx-3 px-2 rounded-full' onClick={() => {handleDelete('project', key._id)}}>delete</button>
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