import React from 'react'

const About = () => {
  let experience = [{
    title: "Software Engineer",
    company: "Siemens",
    fromDate: "03/03/2023",
    toDate: "current",
    details: " 1) Work on the product teamcenter \n 2) Work on the python \n 3) Work on product to update from one version to anathor"
  }, {
    title: "Software Engineer",
    company: "Siemens",
    fromDate: "03/03/2023",
    toDate: "current",
    details: " 1) Work on the product teamcenter \n 2) Work on the python \n 3) Work on product to update from one version to anathor"
  }, {
    title: "Software Engineer",
    company: "Siemens",
    fromDate: "03/03/2023",
    toDate: "current",
    details: " 1) Work on the product teamcenter \n 2) Work on the python \n 3) Work on product to update from one version to anathor"
  }]
  return (
    <div className="about">
      <div className="experience">
        <h4 class="text-3xl font-normal leading-normal mt-4 bg-gray-200 mb-2 p-5 text-zinc-800">
          Experience
        </h4>
        {
          experience.map((key) => (
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
      </div>
      <div className="education">
        <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-zinc-800">
          Education
        </h4>
      </div>
      <div className="achievements">
        <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-zinc-800">
          Achievements
        </h4>
      </div>
    </div>
  )
}

export default About