import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

function Potluck(props) {
    const { potlucks } = props;
    const { id } = useParams();

    const potluck = potlucks[id - 1];
    // useEffect(()=>{
    //     axios.get('#')
    //         .then(response => {
    //             setPotluck(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }, [id]);

    return (
        <div className='potluck container'>
            {/* Presentational component to display prop data */}
            <h2>{potluck.title}</h2>
            <p>Date: {potluck.date}</p>
            <p>Time: {potluck.time}</p>
            <p>Location: {potluck.location}</p>
            <p>Description: {potluck.description}</p>
            {/* <p>Dishes: </p>
            {dishes.forEach(element => {
              return (
              <p>{element.trim()}</p>)
            })} */}
            <div>
                <Link to={`/potlucks/edit/${potluck.id}`} className = "editButton">Edit Information</Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        potlucks: state.potluckReducer.potlucks,
    }
}

export default connect(mapStateToProps, {})(Potluck);
