import React from 'react';
import { Link } from 'react-router-dom';

const PotluckListItem = (props)=> {
  const { potluck } = props;

  return(<tr key={potluck.id}>
      <p>Title: {potluck.title}</p>
      <p>Date: {potluck.date}</p>
      <p>Time: {potluck.time}</p>
      <p>Location: {potluck.location}</p>
      <td>
        <Link to = {`/potlucks/${potluck.id}`} className = "view">
          <input type = "button" className = "viewButton" value="View Details"/>
        </Link>
      </td>
  </tr>);
}

export default PotluckListItem;