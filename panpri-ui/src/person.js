import React, { useEffect, useMemo, useState } from 'react'
import Grid from './Controls/grid';
import persondata from './DummyData/person.json';

export const Person = () => {
    console.log(persondata);
    const [personState, setPerson] = useState([]);
    const fetchPerson = () => {
        setPerson(persondata)
    }
useEffect(() => fetchPerson(), []);

const columns = useMemo(
    () => [
        {
            accessorKey: 'name.firstName', //access nested data with dot notation
            header: 'First Name',
            size: 150,
        },
        {
            accessorKey: 'name.lastName',
            header: 'Last Name',
            size: 150,
        },
        {
            accessorKey: 'address', //normal accessorKey
            header: 'Address',
            size: 200,
        },
        {
            accessorKey: 'city',
            header: 'City',
            size: 150,
        },
        {
            accessorKey: 'state',
            header: 'State',
            size: 150,
        },
    ],
    [],
);
return (
    <Grid columns={columns} data={personState} ></Grid>
)
}
