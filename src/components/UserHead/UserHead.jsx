import React from 'react';
import { 
    Typography, 
    Avatar,
    Grid
} from '@material-ui/core';


export default function UserHead({user}) {

    return (
        <div>
            <Typography variant='h4' component='h4'>Hello, {user.firstName}</Typography>
            <Grid justify='center' alignItems='center'>
                <Avatar
                    src={user.avatarURL}
                />
            </Grid>
        </div>
    )
}