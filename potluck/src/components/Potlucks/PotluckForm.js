import React, { useState } from 'react';
// import { useHistory } from 'react-router';
// import axios from 'axios';

const potluckValues = {
    eventName: "",
    date: "",
    time: "",
    location: "",
    description: "",
    food: [], // wanted to add this to an array so we can map through it and for each value we can output a checkbox for guests to check if they will bring that food
    // check line 89 regarding this array
}

function PotluckForm() {
    const [ potluckForm, setPotluckForm ] = useState(potluckValues)
    // const { push } = useHistory()

    const potluckSubmit = (event) => {
        event.preventDefault()
        // axios post 
        // useHistory push to direct user to event:id with their just created event
        console.log(potluckForm)
    }

    const handleChange = (event) => {
        setPotluckForm({ 
            ...potluckForm,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            {/* <h1> Create Event + Food Item Wish List (Organizer) </h1> */}
            <div> 
                <form onSubmit={potluckSubmit}>
                    <label> Event Name: 
                        <input 
                            id="eventName"
                            type="text"
                            name="eventName"
                            onChange={handleChange}
                            value={potluckForm.eventName}
                        />
                    </label>
                    <label> Date: 
                        <input 
                            id="date"
                            type="date"
                            name="date"
                            onChange={handleChange}
                            value={potluckForm.date}
                        />
                    </label>
                    <label> Time: 
                        <input 
                            id="time"
                            type="time"
                            name="time"
                            onChange={handleChange}
                            value={potluckForm.time}
                        />
                    </label>
                    <label> Location: 
                        <input 
                            id="location"
                            type="text"
                            name="location"
                            onChange={handleChange}
                            value={potluckForm.location}
                        />
                    </label>
                    <label> Description: 
                        <input 
                            id="description"
                            type="text"
                            name="description"
                            onChange={handleChange}
                            value={potluckForm.description}
                        />
                    </label>
                    <label> Food: 
                        <input 
                            id="food"
                            type="text"
                            name="food"
                            onChange={handleChange} 
                            value={potluckForm.food} // this input value is not console logged as an array, would anyone know how to do this?
                        />
                    </label>
                    <button type="submit"> Submit </button>
                </form>
            </div>
        </div>
    )
}

export default PotluckForm
