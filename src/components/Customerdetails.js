import React from 'react'
import { Link } from 'react-router-dom';
import Customers from './Customers';




export default function Customerdetails({ match }) {
    const id = match.params.id;
    console.log(id);
    const customer = Customers.filter((temp) => {
        if (temp.id == id) {
            return temp;
        }
    });
    console.log(customer);
    return (
        <div class="card customercard" >
            <img src='https://www.commbox.io/wp-content/uploads/2019/10/53-1-1024x600.jpg' />
            <div class="card-body">
                <h4 class="card-title">{customer[0].name}</h4>
                <h5 class="card-text">{customer[0].mail}</h5>
                <h6 class="card-text">Balance: ₹ {customer[0].balance} </h6>
            </div>
            
            <div class="card-body">
                <Link to={`/customers/${customer[0].id}/send`}>
                <a href="#" class="btn ">Send money</a>
                </Link>
            
                
            </div>
        </div>
        // <h1>hello</h1>

    )
}
