import React from 'react'
import { useEffect, useState } from 'react'

export default function ToDo() {
    const [data, setData] = useState();
    const fetchtoDos = () => {
        fetch("https://jsonplaceholder.typicode.com/todos").then(
            Response => {
                return Response.json();
            }).then(data => {
                console.log(data);
                setData(data)
                

            }).catch((e) => console.log(e.message));
    }
    useEffect(() =>{
        fetchtoDos()
    }, [])
    console.log(data);

    return (
        <div>
            {data?.map((todo) => {
                return <div key={todo.id} >{todo.userId}:{todo.title}</div>
            })}
        </div>
    )
}
