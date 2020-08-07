import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import './Layout.css';

export default function Layout({ children, ...props }) {
    return (
        <Fragment>
            <Head {...props} />
            <Header 
                user={props.user}
                handleLogout={props.handleLogout}
                quote={props.quote}
                quoteAuth={props.quoteAuth}
                open={props.open}
                onOpen={props.onOpen}
                onClose={props.onClose}
            />
            <main className="content-style">{children}</main>
            <div className="footer-style">
                <Footer />
            </div>
        </Fragment>
    )
}