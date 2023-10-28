import React, { useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addExperience, addEducation, addSkill, addAchievement } from '../../actions/about'

const AddData = () => {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('current');
    const [details, setDetails] = useState('');
    const [checked, setChecked] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation().pathname.slice(7);

    const handleSubmit = (e) => {
        e.preventDefault();

        switch(location) {
            case 'experience':
                dispatch(addExperience({ title, company, fromDate, toDate, details }, navigate))
                break;

            case 'education':
                dispatch(addEducation({ institute: title, degree: company, marks: details, fromDate, toDate }, navigate))
                break;

            case 'skills':
                dispatch(addSkill({ skill: details }, navigate))
                break;

            case 'achievements':
                dispatch(addAchievement({ achievement: details }, navigate))
                break;

            default:
                console.log("No valid path found...");
        }
    }

    return (
        <div>
            <div className="flex justify-center items-center w-screen h-screen bg-white">
                <div className="container mx-auto my-4 px-4 lg:px-20">

                    <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-40 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        {
                            (location === 'experience' || location === 'education') && (
                                <>
                                    <div className="flex">
                                        <h1 className="font-bold uppercase text-5xl">Add Data for <br /> {location.toUpperCase()}</h1>
                                    </div>
                                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                        <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text" placeholder={location === 'experience' ? '*Add Title' : '*Add Institute'} onChange={(e) => setTitle(e.target.value)} />
                                        <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text" placeholder={location === 'experience' ? '*Add Company Name' : '*Add Degree Name'} onChange={(e) => setCompany(e.target.value)} />
                                        <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="date" placeholder="*from date" onChange={(e) => setFromDate(e.target.value)} />
                                        <input className={checked ? "w-full bg-gray-100 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" :
                                            "w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"}
                                            type="date" placeholder="*to date" disabled={checked} onChange={(e) => setToDate(e.target.value)} />
                                    </div>
                                    <div className="my-4">
                                        <span className="ml-60 mr-5"><span className="text-red-500">*</span>{location === 'experience' ? 'Are you currently working in the company?' : 'Are you doing education?'} </span>
                                        <input type="checkbox" placeholder="*details" className="h-3 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" onChange={(e) => setChecked(!checked)} />
                                    </div>
                                </>
                            )
                        }
                        {
                            location === 'experience' && (
                                <div className="my-4">
                                    <textarea placeholder="*details" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" onChange={(e) => setDetails(e.target.value)}></textarea>
                                </div>
                            )
                        }
                        {
                            location === 'education' && (
                                <>
                                    <input className={checked ? "w-full bg-gray-100 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" :
                                        "w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"}
                                        type="text" placeholder="*Marks Obtained" disabled={checked} onChange={(e) => setDetails(e.target.value)} /></>
                            )
                        }
                        {
                            location === 'skills' && (
                                <>
                                    <input className={checked ? "w-full bg-gray-100 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" :
                                        "w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"}
                                        type="text" placeholder="*Add Skill" disabled={checked} onChange={(e) => setDetails(e.target.value)} /></>
                            )
                        }
                        {
                            location === 'achievements' && (
                                <>
                                    <input className={checked ? "w-full bg-gray-100 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" :
                                        "w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"}
                                        type="text" placeholder="Add Achievement" disabled={checked} onChange={(e) => setDetails(e.target.value)} /></>
                            )
                        }
                        <div className="my-2 w-1/2 lg:w-1/4">
                            <button className="uppercase text-sm font-bold tracking-wide bg-purple-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline" onClick={handleSubmit}>
                                Add data
                            </button>
                        </div>
                    </div>

                    <div
                        className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-purple-900 rounded-2xl">
                        <div className="flex flex-col text-white">
                            <h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                tincidunt arcu diam,
                                eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
                            </p>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Main Office</h2>
                                    <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                                    <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                                    <i className="fab fa-facebook-f text-blue-900" />
                                </a>
                                <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                                    <i className="fab fa-linkedin-in text-blue-900" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddData