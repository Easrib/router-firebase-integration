import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <button style={{ margin: "10px" }} onClick={signInWithGoogle}>Sign in With Google</button>

            <form action="">
                <input type="email" name="email" id="" placeholder='Please write your email' /><br />
                <input type="password" name="password" id="" placeholder='password' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login;