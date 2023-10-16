import React, { useState, useEffect, useReducer, useContext } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context'

const emailReducer = (state, action) => {
  console.log(action)
  console.log(state)
  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.includes('@')}
  }

  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.includes('@')}
  }

  return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {

  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.trim() > 6}
  }

  if (action.type === 'INPUT_BLUR') {
    return {value: action.val, isValid: state.val.trim() > 6}
  }


  return { value: '', isValid: false }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // Alternative way of managing state using useReducer
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: false})
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: false})
  // // Don't want to be checking validity whilst the user 
  // // is typing so set a timeout to wait whilst this 
  // // is happening. The validity doesn't get checked because
  // // the cleanup function is always runnning first.

  // Alias assignment
  // We will only run useEffect when validity changes and not input.
  const { isValid: emailIsValid} = emailState
  const { isValid: passwordIsValid} = passwordState;

  const authCtx = useContext(AuthContext)

  useEffect(() => {

    const identifier = setTimeout(() => {

      console.log('Checking form validity!');

      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    //Cleanup function that runs before the set time out function
    // other than when we first load the page
    // resets the timer. 
    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier)
    }

  }, [emailIsValid, passwordIsValid])



  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);

    dispatchEmail({type: 'USER_INPUT', val: event.target.value});


    // Use useEffect because we don't know what state snapshot we may be working with here
    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // )
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);

    dispatchPassword({type: 'USER_INPUT', val: event.target.value});

    // Use useEffect because we don't know what state snapshot we may be working with here
    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // )    
  };

  const validateEmailHandler = () => {
    // setEmailIsValid( emailState.isValid);
    dispatchEmail({type:'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type:'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
