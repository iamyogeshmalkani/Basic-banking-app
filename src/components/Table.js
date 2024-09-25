import React from 'react'
import { Link } from 'react-router-dom'

export default function Table(props) {
  
    return (
        <tr >
      <th scope="row">{props.customer.id}</th>
      <td>{props.customer.name}</td>
      <td>{props.customer.mail}</td>
      <td>₹ {props.customer.balance}</td>
      <td> 
        <Link to={`/customers/${props.customer.id}`}>
        
        <button type="button"  class="btn ">view</button>
        </Link>
      
      </td>
      
    </tr>
    
    )
}
