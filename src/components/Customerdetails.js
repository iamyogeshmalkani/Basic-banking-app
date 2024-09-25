import React from 'react'
import { useParams, Link } from "react-router-dom"; 
import Customers from "./Customers";

export default function Customerdetails() {
    const { id } = useParams();
    console.log(id);

    
    const customer = Customers.find((temp) => temp.id === parseInt(id));
    console.log(customer);

    return (
        <div>
            <div className="card customercard">
                <img
                    src="https://www.commbox.io/wp-content/uploads/2019/10/53-1-1024x600.jpg"
                    alt="not found"
                />
                <div className="card-body">
                    {customer ? (
                        <>
                            <h4 className="card-title">{customer.name}</h4>
                            <h5 className="card-text">{customer.mail}</h5>
                            <h6 className="card-text">
                                Balance: ₹ {customer.balance}
                            </h6>
                         <Link key={id}to={`/customers/${id}/send`}> 
                          <a href='/success' class='btn'>Send Money</a> </Link> 
                        </>
                    ) : (
                        <p>Customer not found</p>
                    )}
                </div>
            </div>

            <div>
                {Customers.map((info) => {
                    const { id } = info;
                    return (
                        <Link key={id} to={`/customers/${id}`}>
                            
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
         

