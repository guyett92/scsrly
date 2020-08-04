import React from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: { maxWidth: 345, },
    media: { height: 140, }, 
});

export default function GoalCard(props) {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    image='https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80' /* Test, do I want a photo? - Yes */
                />
                <CardContent>
                    <Typography gutterBottom varian="h5" component="h2">
                        Goal Name Here {/* Insert goal name here */}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Tasks Go Here {/* Insert tasks here */}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button 
                    href='https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80' /* This needs to be the same as the image link above. Can do a small avatar instead? */
                    size='small'
                    color='primary'
                >
                    Thumbnail Picture
                </Button>
            </CardActions>
        </Card>
    )
}