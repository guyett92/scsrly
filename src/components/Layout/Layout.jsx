import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import './Layout.css';

// Fix Head

export default function Layout(props) {
    return (
        <Fragment>
            <Header 
                user={props.user}
                handleLogout={props.handleLogout}
                quote={props.quote}
                quoteAuth={props.quoteAuth}
                open={props.open}
                onOpen={props.onOpen}
                onClose={props.onClose}
            />
        </Fragment>
    )
}