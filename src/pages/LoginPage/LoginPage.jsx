import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    state = {
        email: '',
        pw: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
        } catch(err) {
            console.log(err);
        }
    }

}