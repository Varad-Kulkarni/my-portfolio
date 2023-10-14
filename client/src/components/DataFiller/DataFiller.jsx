import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addExperience } from '../../actions/about'

const DataFiller = () => {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [fromDate, setFromDate] = useState(Date.now());
    const [toDate, setToDate] = useState(Date.now());
    const [details, setDetails] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        console.log('before dispatcher')
        dispatch(addExperience({title, company, fromDate, toDate, details}, navigate))
    }

    return (
        <div className='mx-16'>
            <h1>Add Experience</h1>
            <form onSubmit = { handleSubmit }>
                <h4>title</h4>
                <input className='bg-sky-100' type="text" onChange={(e) => setTitle(e.target.value)} />
                <h4>company</h4>
                <input className='bg-sky-100' type="text" onChange={(e) => setCompany(e.target.value)} />
                <h4>fromDate</h4>
                <input className='bg-sky-100' type="text" onChange={(e) => setFromDate(Date.now())} />
                <h4>todate</h4>
                <input className='bg-sky-100' type="text" onChange={(e) => setToDate(Date.now())} />
                <h4>details</h4>
                <input className='bg-sky-100' type="text" onChange={(e) => setDetails(e.target.value)} />
                <input type="submit" value="submit" className='bg-gray-300' />
            </form>
        </div>
    )
}

export default DataFiller