import React from 'react'
import axios from '../axios'
import styled from 'styled-components'

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

const initialFormValues = {
    name: '',
    date: '',
    time: '',
    location: '',
    dishes: '',
  }

 //modify potluck form to use local state instead of props
function PotluckForm() {

    const [formValues, setFormValues] = useState(initialFormValues)

    const onChange = evt => {
      const name = evt.target.name;
      const value = evt.target.value;
      setFormValues({...formValues, [inputName]: inputValue})
    }
  
    const onSubmit = evt => {
      evt.preventDefault();
      
      const newPotluck = {
        name: formValues.name.trim(),
        date: formValues.date.trim(),
        time: formValues.time.trim(),
        location: formValues.location.trim(),
        dishes: formValues.split(",")
      }

      // NEED AN API TO POST TO


      axios.post('fakeapi.com', newPotluck)
        .then(res => {
          console.log(res);
          setFormValues(initialFormValues)
        })
        .catch(err => {
          console.error(err);
        })  
    }
  
    
    return (
        <div>
                <form className='form container' onSubmit={onSubmit}>
                <div className='form-group inputs'>
                    {/* Text Inputs */}
                    <label>Event Name
                    <Input 
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="Event Name"
                        maxLength="60"
                        onChange={onChange}
                    />
                    </label>

                    <label>Date
                    <Input 
                        type="date"
                        name="date"
                        value={values.date}
                        placeholder="date placeholder"
                        maxLength="10"
                        onChange={onChange}
                        />
                    </label>

                    <label>Time
                    <Input 
                        type="time"
                        name="time"
                        value={values.time}
                        placeholder="time placeholder"
                        maxLength="10"
                        onChange={onChange}
                        />
                    </label>

                    <label>Location
                    <Input 
                        type="text"
                        name="location"
                        value={values.location}
                        placeholder="Event Location"
                        maxLength="30"
                        onChange={onChange}
                        />
                    </label>

                    <label>Dishes
                    <Input 
                        type="text"
                        name="location"
                        value={values.dishes}
                        placeholder="Event Location"
                        maxLength="30"
                        onChange={onChange}
                        />
                    </label>


                    <div className='submit'>
                    <Button>Add Potluck</Button>
                    </div>
                </div>
                </form>
        </div>
    )
}

export default PotluckForm
