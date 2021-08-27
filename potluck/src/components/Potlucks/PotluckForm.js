import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { addPotluck } from '../../actions/potluckActions';
import axios from 'axios'
import { Link } from 'react-router-dom';


const Button = styled.button`
  background:#222831 ;
  border-radius: 3px;
  border: 2px solid #30475E;
  color:white;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Input = styled.input`
  padding: 0.5em;
  margin-top:0.5em;
  
`

const PotluckFormDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  
  background-image: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-position: center;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  
 
  
`

const initialState = {
  title: '',
  date: '',
  time: '',
  location: '',
  description: '',
}


function PotluckForm(props) {
  const { addPotluck } = props;
  const [newPotluck, setPotluck] = useState(initialState);
  const { push } = useHistory();

  const onChange = event => {
    setPotluck({
      ...newPotluck,
      [event.target.name]: event.target.value,
    })
  }

  const submit = event => {
    event.preventDefault();

    axios.post("#", newPotluck)
      .then(response => {
        push('/potlucks')
      })
      .catch(error => {
        console.log(error);
      })

    //Temporary until endpoints are completed
    addPotluck(newPotluck);
    push('/potlucks')
  }

  return (
    <div>

      <form className='potluckForm' onSubmit={submit}>
        <PotluckFormDiv>
          {/* Text Inputs */}
          <div className="potluckCard">
            <label>Title
              <Input
                type="text"
                name="title"
                value={newPotluck.title}
                placeholder="Event Title"
                onChange={onChange}
              />
            </label>

            <label>Date
              <Input
                type="date"
                name="date"
                value={newPotluck.date}
                onChange={onChange}
              />
            </label>

            <label>Time
              <Input
                type="time"
                name="time"
                value={newPotluck.time}
                onChange={onChange}
              />
            </label>

            <label>Location
              <Input
                type="text"
                name="location"
                value={newPotluck.location}
                onChange={onChange}
              />
            </label>

            <div className="formDiv">
              <label>Description</label>
              <textarea
                value={newPotluck.description}
                onChange={onChange}
                name="description"
              ></textarea>
            </div>

            {/* <label>Dishes
                <input 
                  type="text"
                  name="location"
                  value={values.dishes}
                  placeholder="Event Location"
                  maxLength="30"
                  onChange={onChange}
                  />
              </label> */}
            <div>
              <Button>Add Potluck</Button>
              <Link to={`/potlucks/`}><input type="button" className="btnbtn-default" value="Cancel" /></Link>
            </div>
          </div>

        </PotluckFormDiv>
      </form>

    </div>
  )
}

export default connect(null, { addPotluck })(PotluckForm);
