// Date: Nov 22, 2019 by Tran
import React from 'react';
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginAdvert = () => {
    return (
        <div style={backgroundStyle}>
            <br />
            <h2>Follow your interests</h2>
            <FontAwesomeIcon icon={faSearch} />
            <br />
            <h2>Connect with people</h2>
            <FontAwesomeIcon icon={faUserFriends} />
            <br />
            <h2>Join the conversation</h2>
            <FontAwesomeIcon icon={faComment} />
            <br />
            <br/>
        </div>
    );
}

// CSS Styling: 
const backgroundStyle = {
    color: 'white',
    fontFamily: 'Helvetica, sans-serif 500',
    backgroundColor: '#00aced',
}

export default LoginAdvert;