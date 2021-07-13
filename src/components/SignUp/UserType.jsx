import React, { useState } from 'react'
import UserTypeSwitch from '../UserType/UserType'
import { Switch, Case, Default } from 'react-if'
import ClientSignUp from '../ClientSignUp/ClientSignUp'
import DoctorSignUp from '../DoctorSignUp/DoctorSignUp'
import EmployeeSignUP from '../EmployeeSignUP/EmployeeSignUP'
function UserType({ handleChange }) {
    const [userType, setUserType] = useState('')
    
    return (
        <>
            <UserTypeSwitch changeType={setUserType} handleChange={handleChange} />
            <Switch>
                <Case condition={userType === "client"}>
                    <ClientSignUp handleChange={handleChange} />
                </Case>
                <Case condition={userType === "doctor"}>
                    <DoctorSignUp handleChange={handleChange} />
                </Case>
                <Case condition={userType === "employee"}>
                    <EmployeeSignUP handleChange={handleChange} />
                </Case>
                <Default>
                    {null}
                </Default>
            </Switch>
        </>
    )
}

export default UserType


