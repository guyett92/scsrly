import React, { Component } from 'react';
import {
    CardContent,
    TextField,
    CardActions,
    Button,
    Typography,
    Card
} from '@material-ui/core';
import userService from '../../utils/userService';

class BioEditCard extends Component {
    state = {
        bio: this.props.user.bio,
        user: this.props.user
    }

    handleUpdateBio = async (e) => {
        e.preventDefault();
        this.props.handleEdit();
        try {
            await userService.updateBio(this.state.user._id, this.state);
        } catch (err) {
            console.log(err);
        }
    }

    handleBioChange = (e) => {
        this.setState({
            bio: e.target.value
        })
    }


    render() {
        return (
            <Card style={{minHeight: '10rem'}}>
                <form id="editBio" onSubmit={this.handleUpdateBio}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h3">About You</Typography>
                        <TextField 
                            type="text" 
                            onChange={this.handleBioChange}
                            name="bio" 
                            value={this.state.bio}
                            autoFocus
                            fullWidth
                            multiline
                            variant="outlined"
                        />
                </CardContent>
                <CardActions style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Button size="small" style={{color: '#f44336'}} onClick={this.props.handleEdit}>Cancel</Button>
                    <Button size="small" style={{color: 'green'}} type="submit">Save Changes</Button>
                </CardActions>
                </form>
            </Card>
        )
    }
}

export default BioEditCard;