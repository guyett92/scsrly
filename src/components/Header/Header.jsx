import React from 'react';
import Navbar from '../Navbar/Navbar';

export default function Header(props) {
    return (
        <div>
            <Navbar 
                user={props.user}
                handleLogout={props.handleLogout}
            />
            {props.quote} - {props.quoteAuth}
        </div>
    )
}