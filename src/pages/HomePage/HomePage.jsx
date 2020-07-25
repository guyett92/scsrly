import React from 'react';
import Navbar from '../../components/Navbar/Navbar';


const HomePage = (props) => {
    return (
        <div>
            <Navbar user={props.user} handleLogout={props.handleLogout} />
        </div>
    )
}

export default HomePage;