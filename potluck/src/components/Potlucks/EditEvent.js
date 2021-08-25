import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
// import axiosWithAuth from '../utils/axiosWithAuth.js';

const EditEvent = (props) => {
	const { push } = useHistory();
	const { id } = useParams();

	const [potluck, setPotluck] = useState({
		title:"",
		date: "",
		time: "",
		location: "",
		description: "",
	});
	
	const handleChange = (event) => {
        setPotluck({
            ...potluck,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = (event) => {
		event.preventDefault();
		axios.put(`#`, potluck) //filler for endpoint
			.then(response => {
				push(`/potlucks/${id}`);
				props.setPotlucks(response.data);
			})
			.catch(error => {
				console.log(error);
			})
	}

	useEffect(() => {
		axios.get(`#`) //filler for endpoint
			.then(response => {
				setPotluck(response.data);
			})
			.catch(error => {
				console.log(error);
			})
	}, [])
	
	const { title, date, time, location, description } = potluck;

    return (
        <div className = "editForm">
            <form onSubmit = {handleSubmit}>
                <div className="editingHeader">						
                    <h4 className="potluckTitle">Editing <strong>{potluck.title}</strong></h4>
                </div>

                <div className = "editFormBody">					
                    <div className = "formDiv">
                        <label>Title</label>
                        <input 
                            value = {title}
                            onChange = {handleChange}
                            name = "title" 
                            type = "text" 
                            />
                    </div>

                    <div className = "formDiv">
                        <label>Date</label>
                        <input 
                            value = {date}
                            onChange = {handleChange}
                            name = "date" 
                            type = "date" 
                            />
                    </div>

                    <div className = "formDiv">
                        <label>Time</label>
                        <input 
                            value = {time}
                            onChange = {handleChange}
                            name = "time" 
                            type = "time" 
                            />
                    </div>

                    <div className = "formDiv">
                        <label>Location</label>
                        <input 
                            value = {location}
                            onChange = {handleChange}
                            name = "location" 
                            type = "text" 
                            />
                    </div>

                    <div className = "formDiv">
                        <label>Description</label>
                        <textarea 
                            value = {description} 
                            onChange={handleChange} 
                            name = "description" 
                        ></textarea>
                    </div>
                                    
                </div>
                <div className = "editorFooter">			    
                    <input 
                        type="submit" 
                        className = "button button-info" 
                        value = "Save"/>
                    <Link to = {`/potlucks/1`}><input type = "button" className = "btn btn-default" value = "Cancel"/></Link>
                </div>
            </form>
        </div>
    );
}

export default EditEvent;
