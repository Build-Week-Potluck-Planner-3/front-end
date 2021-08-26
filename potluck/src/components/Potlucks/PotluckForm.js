import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { addPotluck } from '../../actions/potluckActions';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Button = styled.button`
  background: #F05454;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: #DDDDDD;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #DDDDDD;
  background: #F05454;
  border: none;
  border-radius: 3px;
`;

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
        <form className = 'potluckForm' onSubmit = {submit}>
          <div className='potluckInputs'>
              {/* Text Inputs */}
              <label>Title
                <Input 
                  type = "text"
                  name = "title"
                  value={newPotluck.title}
                  placeholder = "Event Title"
                  onChange = {onChange}
                />
              </label>

              <label>Date
              <Input 
                  type = "date"
                  name = "date"
                  value = {newPotluck.date}
                  onChange = {onChange}
                  />
              </label>

              <label>Time
                <Input 
                  type = "time"
                  name = "time"
                  value={newPotluck.time}
                  onChange={onChange}
                />
              </label>

              <label>Location
                <Input 
                  type = "text"
                  name = "location"
                  value = {newPotluck.location}
                  onChange = {onChange}
                />
              </label>

              <div className = "formDiv">
                <label>Description</label>
                <textarea 
                    value = {newPotluck.description} 
                    onChange = {onChange} 
                    name = "description" 
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
 
              <Button>Add Potluck</Button>
              <Link to = {`/potlucks/`}><input type = "button" className = "btn btn-default" value = "Cancel"/></Link>
          </div>
        </form>
      </div>
    )
}

export default connect(null, {addPotluck})(PotluckForm);
