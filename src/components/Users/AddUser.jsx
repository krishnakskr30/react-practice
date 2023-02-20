import React from "react";
import { useState } from "react";
import Card from '../UI/Card'
import classes from './AddUser.module.css';
import Button from "../UI/Button";

const AddUser = (props)=>{
    const [enteredUserName,setEnteredUserName]= useState('');
    const [enteredAge,setEnteredAge]= useState('');
    const addUserHandler=(event)=>{
        event.preventDefault();
    };

    const userNameChangeHandler =(event)=>{
        setEnteredUserName(event.target.value);
    };   
    const ageChangeHandler =(event)=>{
        setEnteredAge(event.target.value);
    };
    return(
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" onChange={userNameChangeHandler}></input>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" onChange={ageChangeHandler}></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
     );
    
};

export default AddUser;