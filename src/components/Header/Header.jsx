import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Header(props) {
    return (
        <div>
            <Navbar 
                user={props.user}
                handleLogout={props.handleLogout}
                onSidebarOpen={props.onOpen} 
            />
            <Sidebar
            open={props.open}
            onOpen={props.onOpen}
            onClose={props.onClose}
            />
            {props.quote} - {props.quoteAuth}
        </div>
    )
}