import React from 'react';
import Layout from '../../components/Layout/Layout';

const UserPage = (props) => {
    return (
        <Layout
        title={props.title}
        pageTitle={props.user.name}
        keywords="aaron, guyett, success, snake"
        user={props.user}
        handleLogout={props.handleLogout}
        quote={props.quote}
        quoteAuth={props.quoteAuth}
        open={props.open}
        onOpen={props.onOpen}
        onClose={props.onClose}
        >
        </Layout>
    )
}

export default UserPage;