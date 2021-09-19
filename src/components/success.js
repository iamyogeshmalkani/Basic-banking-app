import React from 'react';
import image from "./image/success.jpeg";
import { Link } from 'react-router-dom';


export default function Success() {
    return (
      <div class="card cardib" >
      <img src={image} class="card-img-top " alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Successfull</h5>
        <Link to="/transactions">
        <a  class="btn ">OK</a>
        </Link>
        
      </div>
    </div>

    )
}
