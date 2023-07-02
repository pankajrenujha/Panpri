import React from 'react'
import ProductJson from '../DummyData/ProductData.json'
import { useEffect, useState } from "react";
import ToDo from './ToDo';
import CountriesCitiesPractise from './CountriesCitiesPractise';

export default function Product() {
    
        // return fetch('https://jsonplaceholder.typicode.com/todos')
        //   .then(data => data.json())
      
    const DisplayData=ProductJson.product.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.Name}</td>
                    <td>{info.Price}</td>
                    <td>{info.Stock}</td>
                    <td>{info.Type}</td>
                </tr>
            )
        }
    )
  return (
    
    
    <div>This is Product

        <table>
            <tr>
                
                <th>
                    Name
                </th>
                <th>
                    Price
                </th>
                <th>
                    Stock
                </th>
                <th>
                    Type
                </th>
            </tr>
            <tbody>
                {DisplayData}
            </tbody>
            
        
        </table>
        {/* <ToDo />
        <CountriesCitiesPractise /> */}
    </div>
  )
}
