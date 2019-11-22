import React from 'react';
import switterLogo from '../csc667-logo.svg';
import '../App.css';

const LoginForm = () => {
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
            padding: '10px 50px'
        }, 
        bar: {
            position: 'relative',
            display: 'block',
            width: '300px'
        }
    }; 

    return (
    <div>
        <div>
            <span>
                <img src={switterLogo} width='50' height='50' alt='logo'/>
            </span>
            <span>
                <h1>Switter, it's Twitter, but sweeter</h1>
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
                <button>Forgot password?</button>
                <br />
                <button>Log in</button>
            </form>
        </div>  
    </div>
    );
}

export default LoginForm;