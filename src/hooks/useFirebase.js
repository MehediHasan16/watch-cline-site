import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";



initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoadingSpinara, setisLoadingSpinara] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const GoogleProvider = new GoogleAuthProvider();

    const auth = getAuth();




    const newRegisterUser = (email, password, name, history) => {
        setisLoadingSpinara(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUserInfo = { email, displayName: name };
                setUser(newUserInfo);
                //sava user information database
                saveUserData(email, name, 'POST')
                // update firebase displayName 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => setisLoadingSpinara(false));

    }

    const loginUser = (email, password, location, history) => {
        setisLoadingSpinara(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destinationState = location?.state?.from || '/';
                history.replace(destinationState);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setisLoadingSpinara(false));

    }

    useEffect(() => {
        fetch(`http://localhost:5000/usersData/${user?.email}`)
            .then(res => res.json())
            .then(result => setAdmin(result.admin))
    }
        , [user?.email])

    const userLogout = () => {
        setisLoadingSpinara(true);
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setisLoadingSpinara(false));
    }

    //google pop up authentication
    const singInwithGoogleAuthentication = (location, history) => {
        setisLoadingSpinara(true);
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {

                const user = result.user;
                saveUserData(user.email, user.displayName, 'PUT')
                const destinationState = location?.state?.from || '/';
                history.replace(destinationState);
                setError('');
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setisLoadingSpinara(false));

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setisLoadingSpinara(false);
        });
        return () => unsubscribe;
    }, [])

    const saveUserData = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("http://localhost:5000/usersData", {
            method: method,
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)

        })
            .then()
    }
    return {
        user,
        isLoadingSpinara,
        error,
        admin,
        singInwithGoogleAuthentication,
        newRegisterUser,
        userLogout,
        loginUser
    }

}
export default useFirebase;