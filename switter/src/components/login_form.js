// Date: Nov 22, 2019 by Tran
import React from 'react';
import switterLogo from '../csc667-logo.svg';
import '../App.css';
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
    <div>
        <div>
            <span>
                <br />
                <Link to='/'><img src={switterLogo} width='70px' height='70px' alt='logo'/></Link>
            </span>
            <span>
                <p style={inputStyle.p}>Switter, it's Twitter, but sweeter</p>
            </span>
        </div>
        <div style={inputStyle.container}>
            <form onSubit={(e) => e.preventDefault()}>
                <div style={inputStyle.group}>      
                    <input style={inputStyle.input} type="text" required />
                    <span style={inputStyle.highlight}></span>
                    <span style={inputStyle.bar}></span>
                    <label>Email</label>
                </div>
                <br />
                <div style={inputStyle.group}>      
                    <input style={inputStyle.input} type="text" required />
                    <span style={inputStyle.highlight}></span>
                    <span style={inputStyle.bar}></span>
                    <label>Password</label>
                </div>
                <br />
                <button className='login-btn'>Log in</button>
            </form>
        </div>  
    </div>
    );
}

// CSS Styling: 
const inputStyle = {
    group: {
        position: 'relative',
        marginBottom: '45px'
        
    },
    input: {
        fontSize: '18px',
        padding: '10px 10px 10px 5px',
        display: 'block',
        width: '300px',
        border: 'none',
        borderBottom: '1px solid #757575'
    },
    highlight: {
        position: 'absolute',
        height: '60%',
        width: '100px',
        top: '25%',
        left: '0',
        pointerEvents: 'none',
        opacity: '0.5'
    }, 
    container: {
        fontFamily: 'Roboto',
        width: '600px',
        margin: '30px auto 0',
        display: 'block',
        background: '#FFF',
        padding: '10px 50px',textAlign: 'center'
    }, 
    p: {
        fontFamily: 'Helvetica, sans-serif 500',
        fontSize: '36px',
        fontWeight: '0.1'
    }
}; 

export default LoginForm;