import React from 'react'
import image from "./image/download.jpeg";
import { Link } from 'react-router-dom';
import success from './success';



export default function Home() {
    return (
        <div className="mainhome" >
            <div className="left">
            <h1>WELCOME TO THE <br></br>TSF BANK</h1>
            <h4>Asia's Safest Bank For 100 years...</h4>
            <Link to="/transactions">
            <button type="button" class="btn btn-dark">Transaction History</button>
            </Link>
            
            <br></br>
            <Link to="/customers">
            <button type="button" class="btn btn-dark">Send Money</button>
            </Link>
            {/* <Link to="/success">
            <success />
            </Link> */}
            
            

            </div>
            <div className="right">
            <img src={image} alt='not found'/>

            </div>
          


        </div>
    )
}
