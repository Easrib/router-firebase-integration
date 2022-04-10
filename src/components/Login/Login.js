import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Please Login</h2>
            <form action="">
                <input type="email" name="email" id="" placeholder='Please write your email' /><br />
                <input type="password" name="password" id="" placeholder='password' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login;