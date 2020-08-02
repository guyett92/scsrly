import React from 'react';


export default function Goals(props) {
    return (
        <div>
            {props.user.goals > 0 ?
                props.user.goals[0].name
            :
                <p>You don't have any goals! Add some!</p>
            }
            
        </div>
    )
}