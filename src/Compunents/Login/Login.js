import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from './config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


const Login = () => {
    const [user,setUser] = useState({});


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     const history = useHistory();
     const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
     const handleLogin = () =>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const {displayName,email} = result.user;
                const newUser = {name:displayName, email}
                setUser(newUser);
                setLoggedInUser(newUser);
                history.replace(from)
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode,errorMessage);
        });
     }

    return (
        <div className="login">
            <button onClick={handleLogin}>Login with Google</button>
            
        </div>
    );
};

export default Login;