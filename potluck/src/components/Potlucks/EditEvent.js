import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, } from 'react-bootstrap';

import axios from 'axios';
// import axiosWithAuth from '../utils/axiosWithAuth.js';

const EditEvent = (props) => {
    const { potlucks } = props;
    const { push } = useHistory();
    const { id } = useParams();

    const [potluck, setPotluck] = useState({
        title: "",
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
        potlucks[id - 1] = potluck;
        push(`/potlucks/${id}`);
    }

    useEffect(() => {
        axios.get(`#`) //filler for endpoint
            .then(response => {
                setPotluck(response.data);
            })
            .catch(error => {
                console.log(error);
            })
        setPotluck(potlucks[id - 1]);
    }, [])

    const { title, date, time, location, description } = potluck;

    return (

        <div className="editImg" >
            <Card style={{ background: "#30475E" }}>
                <div className="editForm">
                    <form onSubmit={handleSubmit}>
                        <div className="editingHeader">
                            <h4 className="potluckTitle">Editing <strong>{potluck.title}</strong></h4>
                        </div>
                        <div className="editFormBody">
                            <div className="formDiv">
                                <label>Title</label>
                                <input
                                    value={title}
                                    onChange={handleChange}
                                    name="title"
                                    type="text"
                                />
                            </div>

                            <div className="formDiv">
                                <label>Date</label>
                                <input
                                    value={date}
                                    onChange={handleChange}
                                    name="date"
                                    type="date"
                                />
                            </div>

                            <div className="formDiv">
                                <label>Time</label>
                                <input
                                    value={time}
                                    onChange={handleChange}
                                    name="time"
                                    type="time"
                                />
                            </div>

                            <div className="formDiv">
                                <label>Location</label>
                                <input
                                    value={location}
                                    onChange={handleChange}
                                    name="location"
                                    type="text"
                                />
                            </div>

                            <div className="formDiv">
                                <label>Description</label>
                                <textarea
                                    value={description}
                                    onChange={handleChange}
                                    name="description"
                                ></textarea>
                            </div>

                        </div>
                        <div className="editorFooter">
                            <input
                                style={{ background: "#30475E", color: "white" }}
                                type="submit"
                                className="button button-info"
                                value="Save" />
                            <Link to={`/potlucks/1`}><input type="button" className="btn btn-default" value="Cancel" style={{ color: "white" }} /></Link>
                        </div>
                    </form>
                </div>
            </Card>
        </div>

    );
}

const mapStateToProps = state => {
    return {
        potlucks: state.potluckReducer.potlucks,
    }
}

export default connect(mapStateToProps, {})(EditEvent);
