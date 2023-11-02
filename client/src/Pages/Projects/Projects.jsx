import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projects_arr = [{
    title: "E-COMMERCE WEBSITE",
    description: "It is a simple e-commerce website created using java servlets and AWS RDS database as a part of our College mini project",
    tags: ["Java", "JSP", "Mysql", "AWS RDS", "HTML", "CSS", "Web Development"],
    details: [
      " 1) Manage Products In Various Categories \n 2) Maintain Admin Panel \n 3) User Profiles \n 4) Feedback And Response "
    ]
  },{
    title: "Stack Overflow clone",
    description: "This is the clone of the stack-overflow clone created using MERN stack",
    tags: ["ReactJS", "ExpressJS", "Javascript", "MongoDB", "HTML", "CSS", "Web Development"],
    details: [
      " 1) User can create new account for login \n 2) User can upload question or give answer \n 3) User can upvote or downvote question \n 4) User can edit his profile \n 5) User can see others profile also "
    ]
  }, {
    title: "E-COMMERCE WEBSITE",
    description: "It is a simple e-commerce website created using java servlets and AWS RDS database as a part of our College mini project",
    tags: ["Java", "JSP", "Mysql", "AWS RDS", "HTML", "CSS", "Web Development"],
    details: [
      " 1) Manage Products In Various Categories \n 2) Maintain Admin Panel \n 3) User Profiles \n 4) Feedback And Response "
    ]
  }]
  return (
    <div>
      <button><Link to='/projects/add'>Add</Link></button>
      {
        projects_arr.map((key) => (
          <div className="max-w-md h-auto mx-auto bg-white rounded-xl m-5 shadow-md overflow-hidden md:max-w-7xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <div className="w-full text-3xl pl-5 object-cover md:h-64 ... flex items-center justify-center md:w-64 bg-purple-200">{key.title}</div>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-purple-500 font-semibold">{key.description}</div>
                <div className="block mt-1 text-lg leading-tight font-medium text-black ... flex flex-row">
                  <span className="p-2 mx-2">Skills : </span> {key.tags.map((tag) => (
                    <div className="p-2 bg-gray-200 rounded-2xl mx-2"> { tag } </div>
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
    </div>
  )
}

export default Projects