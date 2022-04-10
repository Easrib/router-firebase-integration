import { useState } from "react"
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {

    const [user, setUser] = useState('');


    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) =>
                console.error(error))
    }

    return { user, signInWithGoogle };

}

export default useFirebase;