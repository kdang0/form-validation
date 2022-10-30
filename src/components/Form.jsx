import React, { useReducer } from 'react';


const initialState = {
    firstName: {
        value: '',
        error:null
    }, 
    lastName: {
        value: '',
        error:null
    }, 
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action){ 
    return{
        ...state,
        [action.type] : action.payload
    };
}


const Form = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    function handleChange(e) {
        const{ name, value } = e.target;
        if(value.length < 2){
            dispatch({
                type: name,
                payload: {"value": value, "error" : "Less than 2 try again" }
            });
        }
        else{
            dispatch({
                type: name,
                payload: {value}
            });
        }
    }
  return (
    <div>
        {JSON.stringify(state)}
        {state.firstName.error !== null && (
            <p style={{ color: 'red' }}>{state.firstName.error}</p>
        )}
        <div>
            <label>First Name:</label>
            <input 
            name="firstName"
            value = {state.firstName.value}
            onChange = {handleChange}
            />
        </div>
            {state.lastName.error !== null && (
                <p style={{ color: 'red' }}>{state.lastName.error}</p>
            )}
        <div>
            <label>Last Name:</label>
            <input 
            name="lastName"
            value = {state.lastName.value}
            onChange = {handleChange}
            />
        </div>
            {state.email.error !== null && (
                <p style={{ color: 'red' }}>{state.email.error}</p>
            )}
        <div>
            <label>Email:</label>
            <input 
            name="email"
            value = {state.email.value}
            onChange = {handleChange}
            />
        </div>
    </div>
  )
}

export default Form