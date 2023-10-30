import React, { useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addExperience, addEducation, addSkill, addAchievement } from '../../actions/about'

const DataFiller = () => {
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

        if (location === 'skills') {
            if (title === '') {
                alert('all fields are mandetory...');
                return;
            }
        }
        else if (location === 'achievements') {
            if (title === '') {
                alert('all fields are mandetory...');
                return;
            }
        }
        else {
            if (title === '' || company === '' || fromDate === '' || toDate === '' || details === '') {
                alert('all fields are mandetory...')
                return
            }
            let dateFrom = new Date(fromDate).getTime();
            let dateTo = new Date(toDate).getTime();

            if(toDate === 'current' && dateFrom > Date.now()) {
                alert('starting date should be less than today\'s date...');
                return;
            }
            else if(dateTo <= dateFrom) {
                alert('start date should be less than end date')
                return;
            }
        }

        switch (location) {
            case 'experience':
                dispatch(addExperience({ title, company, fromDate, toDate, details }, navigate))
                break;

            case 'education':
                dispatch(addEducation({ institute: title, degree: company, marks: details, fromDate, toDate }, navigate))
                break;

            case 'skills':
                dispatch(addSkill({ skill: title }, navigate))
                break;

            case 'achievements':
                dispatch(addAchievement({ achievement: title }, navigate))
                break;

            default:
                console.log("No valid path found...");
        }
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            {
                                location === 'experience' && (
                                    <span>*Title</span>
                                )
                            }
                            {
                                location === 'education' && (
                                    <span>*Institute</span>
                                )
                            }
                            {
                                location === 'skills' && (
                                    <span>*Add Skill</span>
                                )
                            }
                            {
                                location === 'achievements' && (
                                    <span>*Add Achievement</span>
                                )
                            }
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text" onChange={(e) => setTitle(e.target.value)} />
                        {/* <p class="text-gray-600 text-xs italic">Remove if not needed</p> */}
                    </div>
                </div>
                {
                    (location === 'experience' || location === 'education') && (
                        <>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        {
                                            location === 'experience' && (
                                                <span>*Company</span>
                                            )
                                        }
                                        {
                                            location === 'education' && (
                                                <span>*Degree</span>
                                            )
                                        }
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="test" onChange={(e) => setCompany(e.target.value)} />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        *From Date
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="Date" onChange={(e) => setFromDate(e.target.value)} />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        *To Date
                                    </label>
                                    {
                                        checked ? (
                                            <input class="appearance-none block w-full bg-gray-200 text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-300" id="email" type="Date" disabled onChange={(e) => setToDate(e.target.value)} />
                                        ) : (
                                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="Date" onChange={(e) => setToDate(e.target.value)} />
                                        )
                                    }
                                    <input class="block border rounded py-3 px-4 mb-3" id="email" type="checkbox" onChange={(e) => setChecked(!checked)} />{location === 'experience' ? <span>are you still working in this company?</span> : <span>are you still studing in this institute?</span>}
                                </div>
                            </div>
                            {
                                location === 'education' && (
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full px-3">
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                                *Marks
                                            </label>
                                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="number" onChange={(e) => setDetails(e.target.value)} />
                                            <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                location === 'experience' && (
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full px-3">
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                                *Details
                                            </label>
                                            <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-20 resize-none" id="message" onChange={(e) => setDetails(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                    )
                }
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                        <button class="shadow bg-purple-700 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSubmit}>
                            Add Data
                        </button>
                    </div>
                    <div class="md:w-2/3"></div>
                </div>
            </form>
        </div>
    )
}

export default DataFiller