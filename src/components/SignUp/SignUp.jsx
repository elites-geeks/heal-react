import React from 'react'
import  {useState } from 'react';
import {IF,Switch,Case,Default} from 'react-if'
import Card from 'react-bootstrap/Card';

import UserType from '../UserType/UserType'
 
import ClientSignUp from '../ClientSignUp/ClientSignUp'
import DoctorSignUp from '../DoctorSignUp/DoctorSignUp'
import EmployeeSignUP from '../EmployeeSignUP/EmployeeSignUP'


function SignUp() {
    const [flag,SetFlag]=useState()
    const [usertType,SetUSerType]=useState()
    console.log(usertType);
    return (
    <>
    <Card style={{ width: '24rem', height: 'fit-content' ,padding: '10px' }}>
    <Card.Body>
    <Card.Title>Sign Up</Card.Title>
    <UserType handleUserTypeChange={SetUSerType}/>
    <Switch>
        <Case condition={usertType==='client'}><Card.Body><ClientSignUp/></Card.Body></Case>
        <Case condition={usertType==='doctor'}><DoctorSignUp/></Case>
        <Case condition={usertType==='employee'}><EmployeeSignUP/></Case>
        <Default>choose user Type</Default>
    </Switch>
    </Card.Body>
    </Card>
    
   
    </>
    )
}

export default SignUp