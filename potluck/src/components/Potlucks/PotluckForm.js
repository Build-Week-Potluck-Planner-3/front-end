import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { addPotluck } from '../../actions/potluckActions';
import axios from 'axios'

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
              localStorage.setItem('token', response.data.payload);
              push('/home')
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
                <input 
                  type = "text"
                  name = "title"
                  value={newPotluck.title}
                  placeholder = "Event Title"
                  onChange = {onChange}
                />
              </label>

              <label>Date
              <input 
                  type = "date"
                  name = "date"
                  value = {newPotluck.date}
                  onChange = {onChange}
                  />
              </label>

              <label>Time
                <input 
                  type = "time"
                  name = "time"
                  value={newPotluck.time}
                  onChange={onChange}
                />
              </label>

              <label>Location
                <input 
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

              <button>Add Potluck</button>
          </div>
        </form>
      </div>
    )
}

export default connect(null, {addPotluck})(PotluckForm);
