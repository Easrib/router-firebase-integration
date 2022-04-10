import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true }
            )})

    }

    return (
        <div>
            <h2>Please Login</h2>
            <button style={{ margin: "10px" }} onClick={handleGoogleSignIn}>Sign in With Google</button>

            <form action="">
                <input type="email" name="email" id="" placeholder='Please write your email' /><br />
                <input type="password" name="password" id="" placeholder='password' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login;