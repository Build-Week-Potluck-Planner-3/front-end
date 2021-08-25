import React from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';

function Potluck(props) {
    const { potluck } = props;
    const { id } = useParams();
    const { push } = useHistory();
    
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

export default Potluck;
