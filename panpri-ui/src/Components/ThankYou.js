import React from 'react'
import { useContext } from 'react'
import { MyContext } from './MyContext'

export default function ThankYou(props) {
    const name=useContext(MyContext)
  return (
    // <div>{props.name}</div>
    <div>Welcome : {name}</div>
  )
}
