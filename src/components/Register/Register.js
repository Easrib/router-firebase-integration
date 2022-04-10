import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form action="">
                <input type="text" name="name" id="" placeholder='Please write your name' /> <br />
                <input type="email" name="email" id="" placeholder='Please write your email' /><br />
                <input type="password" name="password" id="" placeholder='password' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Register;