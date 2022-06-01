import { useState } from 'react';
import './FormInput.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const FormInput = (props) => {
    
    const { label, onBlur, focused, onFocus, errorMessage, onChange, type, id, handleView, ...inputProps} = props;

console.log(type)

    return (
        <div className='formInput'>
            <label>{label}</label>
            <input className='input'
                {...inputProps}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                focused={focused}
                type={type}
            />
            {type === 'password' && 
            <FontAwesomeIcon style={{ position: 'absolute', top: 34, right: 10, fontSize: 16 }} onClick={()=>handleView()} icon={faEye} />}
            {type === null &&
            <FontAwesomeIcon style={{ position: 'absolute', top: 34, right: 10, fontSize: 16 }} onClick={()=>handleView()} icon={faEyeSlash} />}
            <span className='error'>{errorMessage}</span>
        </div>
    );
}

export default FormInput;