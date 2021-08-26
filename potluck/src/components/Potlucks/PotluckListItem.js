import React from 'react';
import { Link } from 'react-router-dom';

const PotluckListItem = (props)=> {
  const { potluck } = props;

  return(<div key={potluck.id}>
      <p>Title: {potluck.title}</p>
      <p>Date: {potluck.date}</p>
      <p>Time: {potluck.time}</p>
      <p>Location: {potluck.location}</p>
        <Link to = {`/potlucks/${potluck.id}`} className = "view">
          <input type = "button" className = "viewButton" value="View Details"/>
        </Link>
  </div>);
}

export default PotluckListItem;