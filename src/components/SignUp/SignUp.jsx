import React from 'react'

import Card from 'react-bootstrap/Card';

import UserType from '../UserType/UserType'
 
function SignUp() {
    return (
    <>
    <Card style={{ width: '24rem', height: '20rem' ,padding: '10px' }}>
    <Card.Body>
    <Card.Title>Sign Up</Card.Title>
    <UserType/>
    </Card.Body>
    </Card>
    
   
    </>
    )
}

export default SignUp