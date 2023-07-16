import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { MyContext } from './MyContext'

export default function ThankYou({message}) {
  const location = useLocation()
  const {studentData} = useContext(MyContext)
  return (
    <>
    <h2>{message}</h2>
    <h1>My Name: {studentData.name}</h1>
    <h1>My Email: {studentData.email}</h1>
    <div>Welcome :{location?.state?.name} and your email is {location?.state?.email} </div>
    </>
  )
}
