import React, { Component } from 'react';
import './navbar.css';

function Navbar(props) {
    let start = props.start;
    let middle = props.middle;
    let name = props.name;
    return ( 
        <div>
            <h1> {start} {middle} {name} </h1>
        </div>
     );
}

export default Navbar;



