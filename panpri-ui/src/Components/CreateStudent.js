import React, { useState, useContext } from 'react'
import { MyContext } from './MyContext';


export const CreateStudent = () => {
  const { name } = useContext(MyContext);

  return (
    <div>{name}</div>
  )
}
