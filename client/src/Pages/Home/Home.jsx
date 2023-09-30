import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'
import bgImage from '../../assets/Pictures/home-bg.jpg';

const Home = () => {
  const posts = [
    {
      title: "React Tailwind Card with Grid 1",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    },
    {
      title: "React Tailwind Card with Grid 2",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    },
    {
      title: "React Tailwind Card with Grid 3",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    },
    {
      title: "React Tailwind Card with Grid 4",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    },
  ];
  return (
    <div className='home'>
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
        style={{ backgroundImage: `url(${bgImage})`, height: '400px' }}>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl text-gray-100 font-semibold">Varad Kulkarni</h2>
              <h4 className="mb-6 text-xl text-gray-100 font-semibold">Passionate Software Engineer</h4>
              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light">
                <Link to='/about'>Explore more</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-sec">
        <h4 class="text-3xl font-normal leading-normal m-5 mt-9 mt-0 mb-2 text-zinc-800">
          Recent Projects
        </h4>
      </div>
      <div className="grid gap-5 lg:grid-cols-4 m-5">
        {posts.map((items, key) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
            <img
              className="object-cover w-full h-48"
              src={items.img}
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-purple-500">

                {items.title}
              </h4>
              <p className="mb-2 leading-normal">
                {items.content}
              </p>
              <button className="px-4 py-2 text-sm text-blue-100 bg-gray-600 rounded shadow">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home