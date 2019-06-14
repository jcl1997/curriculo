import React, { Component } from 'react';
import Profile from './Profile';
import Contact from './Contact';
import Hobbies from './Hobbies';

export default class User extends Component {
    render() {
        return (
            <div>
                <div className="p-2 mx-auto mt-1">
                    <Profile />
                </div>
                <div className="p-2">
                    <Contact />
                </div>
                <div className="p-2">
                    <Hobbies />
                </div>
            </div>
        );
    }
}
