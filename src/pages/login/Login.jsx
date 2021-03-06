import React from 'react'
import logo from '../../images/loginImg.png';
import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../../components/formInput/FormInput";
import { login } from "../../redux/apiCalls";
import { Navigate } from 'react-router-dom';
import './Login.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Login = () => {

  const admin = useSelector((state) => state.user.currentUser === null ? null : state.user.currentUser.isAdmin);
  const isLoading = useSelector((state) => state.user.isFetching === null ? null : state.user.isFetching);
  const errorMessage = useSelector((state) => state.user.error === null ? null : state.user.error);


    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [view, setView] = useState(false);
    const [focused, setFocused] = useState(false);
    const dispatch = useDispatch();

    const handleView = () => {
      setView(!view)
    }

    

    useEffect(() => {
      if (focused === true) {
        
      }
    }, [focused])

    const handleFocus = (e) => {
      setFocused(true);
  };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        login(dispatch,{...values})
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value})
    }

    const inputs = [
        /*{
          id: 1,
          name: "firstname",
          type: "text",
          placeholder: "First Name",
          errorMessage:
            "",
          label: "First Name",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },*/
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
        /*{
          id: 3,
          name: "lastname",
          type: "text",
          placeholder: "Last Name",
          errorMessage:
            "",
          label: "Last Name",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },*/
        {
          id: 4,
          name: "password",
          type: view ? null : 'password',
          placeholder: "Password",
          errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          //pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        /*{
          id: 5,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          errorMessage: "Passwords don't match!",
          label: "Confirm Password",
          pattern: values.password,
          required: true,
        },*/
      ];
      if(admin) {
        return <Navigate to='/' replace={true} />
      }

    return (

        <div className='login'>
            <div className='loginCard'>
                <img src={logo} alt='the decalmasters logo' />
                <p>Dashboard</p>
                <p>Log In to Dashboard</p>
                <p>Enter your email and password below</p>
                <form onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <FormInput 
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                            onFocus={() =>
                              input.name === "confirmPassword" && setFocused(true)}
                            focused={focused.toString()}
                            onBlur={handleFocus}
                            type = {input.type}
                            handleView={()=>handleView()}
                        />
                    ))}
                    <button className='button'>{isLoading ? <div className='lrrring'><div></div></div> : <span>Log In</span>}</button>
                    <span className='error1'>{errorMessage}</span>
                </form>
                <p className='registerLink'>Don't have an account?<span>Sign Up</span></p>
            </div>

        </div>
    );}

export default Login;