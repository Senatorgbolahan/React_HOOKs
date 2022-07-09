import './NewEventForm.css'
import React, { useState, useRef } from 'react'


export default function NewEventForm({addEvent}) {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [location , setLocation] = useState('Manchester')
    // const title = useRef()
    // const date = useRef()

    const handleChange = (e)=>{
        setTitle(e.target.value)
    }
    const resetForm = (e)=>{
        setTitle("")
        setDate("")
        setLocation("Manchester")
        // title.current.value =""
        // date.current.value =""
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, date,);
        let event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 100000)
        }

        addEvent(event)
        resetForm()
    }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
        <label>
            <span>Event Title:</span>
            <input 
                type="text"
                // ref={title}
                onChange={handleChange} 
                value={title}
            />
        </label>
        <label>
            <span>Event Date:</span>
            <input 
                type="date"
                // ref={date}
                onChange={(e) => setDate(e.target.value)} 
                value={date}
                />
        </label>
        <label>
            <span>Event location:</span>
            <select onChange={(e) => setLocation(e.target.value)}>
                <option value="manchester">Manchester</option>
                <option value="chelsea">Chelsea</option>
                <option value="london">London</option>
            </select>
        </label>
        <button >Submit</button>

    </form>
  )
}
