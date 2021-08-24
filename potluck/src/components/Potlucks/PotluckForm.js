import React from 'react'

 //modify potluck form to use local state instead of props
function PotluckForm(props) {
    const { values, update, submit } = props;

    const onChange = evt => {
      const name = evt.target.name;
      const value = evt.target.value;
      update(name, value);
    }
  
    const onSubmit = evt => {
      evt.preventDefault();
      submit();
    }
  
    
    return (
        <div>
                <form className='form container' onSubmit={onSubmit}>
                <div className='form-group inputs'>
                    {/* Text Inputs */}
                    <label>Title
                    <input 
                        type="text"
                        name="title"
                        value={values.title}
                        placeholder="Event Name"
                        maxLength="60"
                        onChange={onChange}
                    />
                    </label>

                    <label>Date
                    <input 
                        type="date"
                        name="date"
                        value={values.date}
                        placeholder="date placeholder"
                        maxLength="10"
                        onChange={onChange}
                        />
                    </label>

                    <label>Time
                    <input 
                        type="time"
                        name="time"
                        value={values.time}
                        placeholder="time placeholder"
                        maxLength="10"
                        onChange={onChange}
                        />
                    </label>

                    <label>Location
                    <input 
                        type="text"
                        name="location"
                        value={values.location}
                        placeholder="Event Location"
                        maxLength="30"
                        onChange={onChange}
                        />
                    </label>


                    <div className='submit'>
                    <button>Add Potluck</button>
                    </div>
                </div>
                </form>
        </div>
    )
}

export default PotluckForm
