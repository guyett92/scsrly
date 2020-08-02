import React from 'react';
import Layout from '../../components/Layout/Layout';

const UserPage = (props) => {
    return (
            <Layout
            title={props.title}
            pageTitle={props.user.firstName + " " + props.user.lastName}
            keywords="aaron, guyett, scsr, success"
            user={props.user}
            handleLogout={props.handleLogout}
            quote={props.quote}
            quoteAuth={props.quoteAuth}
            open={props.open}
            onOpen={props.onOpen}
            onClose={props.onClose}
            >
               <p>Hi!</p>
               <p>Hi!</p>

               <p>Hi!</p>

               <p>Hi!</p>
               <p>Hi!</p>
               <p>Hi!</p>
               <p>Hi!</p>
               <p>Hi!</p>
               <p>Hi!</p>

            </Layout>
    )
}

export default UserPage;