import React , {useState,useEffect,useMemo} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import Students from '../DummyData/Student.json'
import Grid from '../Controls/grid'
import { Button } from 'bootstrap'

export const Student = () =>{
    
    console.log(Students)
    const[StudentState,setStudent]=useState([])
    const navigate=useNavigate();
    const fetchStudent=()=>{
        return fetch(' http://localhost:3000/students')
          .then(data => data.json())
          .then((students)=>setStudent(students))
    }
    useEffect(()=>fetchStudent,[]);
    
    const StudentJson=StudentState?.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.firstname}</td>
                    <td>{info.lastname}</td>
                    <td>{info.email}</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>
            )
        }
    )
    return (
        <div>
            Student Details are mentioned below :
        <button onClick={()=>navigate('/student/create')}>Create</button>
        <table>
            <tr>
                <th>firstName</th>
                <th>LastName</th>
                <th>Email</th>
                
            </tr>
            <tbody>
                {StudentJson}
            </tbody>
        </table>
        <Outlet/>
        </div>
    )
}

// export default function Student() {
//   return (
//     <div>Student</div>
//   )
// }
