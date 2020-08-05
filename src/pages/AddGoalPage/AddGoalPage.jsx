import React from 'react';
import Layout from '../../components/Layout/Layout';
import AddGoalForm from '../../components/AddGoalForm/AddGoalForm';

const AddGoalPage = (props) => {
    return (
        <Layout
            title={props.title}
            pageTitle="Add Goal"
            keywords="aaron, guyett, add, goal"
            description="Add a goal through to begin the first stages of towards your success."
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