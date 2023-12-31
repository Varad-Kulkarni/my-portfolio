import React, { useState, useRef, useEffect } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addExperience, addEducation, addSkill, addAchievement } from '../../actions/about'
import { editExperience, editEducation, editSkill, editAchievement } from '../../actions/about'
import { addProject, editProject } from '../../actions/projects'

const DataFiller = () => {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('current');
    const [details, setDetails] = useState('');
    const [checked, setChecked] = useState(false);
    const [tagsString, setTagsString] = useState('');
    const [description, setDescription] = useState('')

    const ref = useRef(null)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Location = useLocation();
    const location = Location.pathname.slice(7);  //  about/somevalue or projects/somevalue

    useEffect(() => {
        if(Location.state != null) {
            prepareEditData()
        }
      }, []);

    const prepareEditData = () => {
        switch (Location.state.type) {
            case 'experience':
                setTitle(Location.state.key.title)
                setCompany(Location.state.key.company)
                setFromDate(Location.state.key.fromDate)
                setToDate(Location.state.key.toDate)
                setDetails(Location.state.key.details)
                break;

            case 'education':
                setTitle(Location.state.key.institute)
                setCompany(Location.state.key.degree)
                setDescription(Location.state.key.marks)
                setFromDate(Location.state.key.fromDate)
                setToDate(Location.state.key.toDate)
                setDetails(Location.state.key.description)
                break;

            case 'skills':
                setTitle(Location.state.key.skill)
                break;

            case 'achievements':
                setTitle(Location.state.key.achievement)
                break;

            case 'ts/add':
                setTitle(Location.state.key.title)
                setCompany(Location.state.key.description)
                setFromDate(Location.state.key.fromDate)
                setToDate(Location.state.key.toDate)
                setDetails(Location.state.key.details)
                setTagsString(createdTagsString(Location.state.key.tags))
                break;

            default:
                console.log("No valid path found...");
        }
    }

    const createdTagsString = (tags) => {
        let result_tags_string = ''
        for(let i = 0; i < tags.length; i++) {
            result_tags_string += tags[i] + '/ '
        }
        return result_tags_string
    }

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

            if (toDate === 'current' && dateFrom > Date.now()) {
                alert('starting date should be less than today\'s date...');
                return;
            }
            else if (dateTo <= dateFrom) {
                alert('start date should be less than end date')
                return;
            }
        }

        let tags = tagsString.split('/ ')

        if(Location.state === null) {
            switch (location) {
                case 'experience':
                    dispatch(addExperience({ title, company, fromDate, toDate, details }, navigate))
                    break;
    
                case 'education':
                    dispatch(addEducation({ institute: title, degree: company, marks: description, fromDate, toDate, description: details }, navigate))
                    break;
    
                case 'skills':
                    dispatch(addSkill({ skill: title }, navigate))
                    break;
    
                case 'achievements':
                    dispatch(addAchievement({ achievement: title }, navigate))
                    break;
    
                case 'ts/add':
                    dispatch(addProject({ title, description: company, fromDate, toDate, details, tags }, navigate))
                    break;
    
                default:
                    console.log("No valid path found...");
            }
        }
        else {
            const id = Location.state.key._id
            switch (Location.state.type) {
                case 'experience':
                    dispatch(editExperience({ title, company, fromDate, toDate, details }, id, navigate))
                    break;
    
                case 'education':
                    dispatch(editEducation({ institute: title, degree: company, marks: description, fromDate, toDate, description: details }, id, navigate))
                    break;
    
                case 'skills':
                    dispatch(editSkill({ skill: title }, id, navigate))
                    break;
    
                case 'achievements':
                    dispatch(editAchievement({ achievement: title }, id, navigate))
                    break;
    
                case 'ts/add':
                    dispatch(editProject({ title, description: company, fromDate, toDate, details, tags }, id, navigate))
                    break;
    
                default:
                    console.log("No valid path found...");
            }
        }
    }

    return (
        <div className="h-screen flex items-center justify-center max-h-full overflow-y-auto max-w-full overflow-x-auto m-5">
            <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            {
                                (location === 'experience' || location === 'ts/add') && (
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
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text" onChange={(e) => setTitle(e.target.value)} ref={ref} defaultValue={Location.state === null ? '' : title} />
                        {/* <p class="text-gray-600 text-xs italic">Remove if not needed</p> */}
                    </div>
                </div>
                {
                    (location === 'experience' || location === 'education' || location === 'ts/add') && (
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
                                        {
                                            location === 'ts/add' && (
                                                <span>*Description</span>
                                            )
                                        }
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" onChange={(e) => setCompany(e.target.value)} ref={ref} defaultValue={Location.state === null ? '' : company} />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        *From Date
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="Date" onChange={(e) => setFromDate(e.target.value)} ref={ref} defaultValue={Location.state === null ? '' : fromDate} />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        *To Date
                                    </label>
                                    {
                                        checked ? (
                                            <input class="appearance-none block w-full bg-gray-200 text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-300" id="email" type="Date" disabled onChange={(e) => setToDate(e.target.value)} ref={ref} defaultValue={Location.state === null ? '' : toDate}/>
                                        ) : (
                                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="Date" onChange={(e) => setToDate(e.target.value)} ref={ref} defaultValue={Location.state === null ? '' : toDate} />
                                        )
                                    }
                                    <input class="block border rounded py-3 px-4 mb-3" id="email" type="checkbox" onChange={(e) => setChecked(!checked)} />{location === 'experience' ? <span>are you still working in this company?</span> : (location === 'education' ? <span>are you still studing in this institute?</span> : <span>are you still worling on project?</span>)}
                                </div>
                            </div>
                            {
                                location === 'education' && (
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full px-3">
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                                *Marks
                                            </label>
                                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" onChange={(e) => setDescription(e.target.value)} ref={ref} defaultValue={Location.state === null ? '' : description}/>
                                            <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                (location === 'experience' || location === 'ts/add' || location == 'education') && (
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full px-3">
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                                *Details
                                            </label>
                                            <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-20 resize-none" id="message" onChange={(e) => setDetails(e.target.value)} ref={ref} defaultValue={Location.state === null ? '' : details}></textarea>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                location === 'ts/add' && (
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full px-3">
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                                *Tags
                                            </label>
                                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" onChange={(e) => setTagsString(e.target.value)} ref={ref} defaultValue={Location.state === null ? '' : tagsString} />
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
                            {Location.state === null ? 'Add' : 'Edit'} Data
                        </button>
                    </div>
                    <div class="md:w-2/3"></div>
                </div>
            </form>
        </div>
    )
}

export default DataFiller