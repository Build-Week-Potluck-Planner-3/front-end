import React from 'react'

function Potluck(props) {
    const {details} = props
    return (
        <div className='potluck container'>
            {/* Presentational component to display prop data */}
            <h2>{details.name}</h2>
            <p>Date: {details.date}</p>
            <p>Time: {details.time}</p>
            <p>Location: {details.location}</p>
            <p>Dishes: </p>
            {dishes.forEach(element => {
              return (
              <p>{element.trim()}</p>)
            })}
        </div>
    )
}

export default Potluck;
