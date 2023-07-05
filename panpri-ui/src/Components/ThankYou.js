import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ThankYou({message}) {
  const location = useLocation()
  return (
    <>
    <h2>{message}</h2>
    <div>Welcome :{location?.details?.name} {location?.details?.email} </div>
    </>
  )
}
