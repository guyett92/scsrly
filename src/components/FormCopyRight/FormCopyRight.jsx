import React from 'react';
import {
    Box,
    Typography,
    Link
} from '@material-ui/core';


export default function Copyright() {

    return (
        <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://aarondguyett.com">
                    Aaron Guyett
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
}