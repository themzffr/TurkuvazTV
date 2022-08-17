import { UsageState, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export const UseIsLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    useEffect(() => {


        onAuthStateChanged(auth, (user) => {
            console.log("user", user);

            setIsLoggedIn(!!user);
        });


    }, []);

    return isLoggedIn;
}