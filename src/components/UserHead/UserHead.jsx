import React from 'react';
import { 
    Typography, 
    Avatar,
    Grid,
    Fade
} from '@material-ui/core';


export default function UserHead({user}) {

    return (
        <div>
            <Grid container align="center">
                <Grid item xs={12}>
                    <Fade in {...{timeout: 1000}}>
                        <Avatar
                            src={user.avatarURL}
                        />
                    </Fade>
                    <Fade in {...{timeout: 2000}}>
                        <Typography variant='h4' component='h4'>Hello, {user.firstName}</Typography>
                    </Fade>
                </Grid>
                <Grid item xs={12}>
                    <Fade in {...{timeout: 4000}}>
                        <Typography variant='h5' component='h5'>What would you like to do?</Typography>
                    </Fade>
                </Grid>
            </Grid>
        </div>
    )
}