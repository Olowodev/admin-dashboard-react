import { useState } from 'react';
import './FormInput.css'

const FormInput = (props) => {
    
    const { label, onBlur, focused, onFocus, errorMessage, onChange, id, ...inputProps} = props;



    return (
        <div className='formInput'>
            <label>{label}</label>
            <input className='input'
                {...inputProps}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                focused={focused}
            />
            <span className='error'>{errorMessage}</span>
        </div>
    );
}

export default FormInput;