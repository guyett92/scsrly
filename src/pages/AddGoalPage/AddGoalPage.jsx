import React from 'react';
import Layout from '../../components/Layout/Layout';
import AddGoalForm from '../../components/AddGoalForm/AddGoalForm';

const AddGoalPage = (props) => {
    return (
        <Layout
            title={props.title}
            pageTitle="Home"
            keywords="aaron, guyett, add, goal"
            user={props.user}
            handleLogout={props.handleLogout}
            quote={props.quote}
            quoteAuth={props.quoteAuth}
            open={props.open}
            onOpen={props.onOpen}
            onClose={props.onClose}
        >
            <AddGoalForm 
            user={props.user}
            history={props.history}
            />
        </Layout>
    )
}

export default AddGoalPage;