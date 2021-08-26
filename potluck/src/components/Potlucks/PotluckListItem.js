import React from 'react';
import { Link } from 'react-router-dom';
import { Card, } from 'react-bootstrap';


const PotluckListItem = (props) => {
  const { potluck } = props;

  return (<div key={potluck.id} className="Card-style" >
    <Card className="Card-size">
      <Card.Header style={{ color: "grey" }}>Event </Card.Header>
      <Card.Body style={{ background: "#30475E" }}>
        <Card.Title className="Title-size"><p style={{ color: "white" }}> {potluck.title}</p></Card.Title>
        <div>
          <p style={{ color: "white" }}>Date: {potluck.date}</p>
          <p style={{ color: "white" }}>Time: {potluck.time}</p>
          <p style={{ color: "white" }}>Location: {potluck.location}</p>
          <Link to={`/potlucks/${potluck.id}`} className="view">
            <input type="button" className="viewButton" value="View Details" style={{ background: "#222831", color: "white" }} />
          </Link>
        </div>

      </Card.Body>

    </Card>

  </div >);
}

export default PotluckListItem;