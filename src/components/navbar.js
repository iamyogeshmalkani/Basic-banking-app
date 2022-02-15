import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="Navbar navbar navbar-expand-lg navbar-light  navbarimp" >
                
                    <img src="https://www.thesparksfoundationsingapore.org/images/logo_small.png"></img>
                
                <div className="navbar-right">
                    <Link to="/Basic-banking-app">
                    <a >Home</a>
                    </Link>

                    <Link to="/transactions">
                    <a >Transactions</a>
                    </Link>

                   
                    <Link to="/customers">
                    <a >View customers</a>
                    </Link>
                </div>

            </nav>
        </div>
    )
}
