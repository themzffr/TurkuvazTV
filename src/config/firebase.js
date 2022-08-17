import { initializeApp } from "firebase/app";
import 'firebase/compat/app';
import 'firebase/compat/firestore';

import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { getFirestore, collection, onSnapshot, doc, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDUkYWKqysS0c0WF4ciDUpOLEtI-vRusUU",
    authDomain: "turkuvaztv.firebaseapp.com",
    databaseURL: "https://turkuvaztv-default-rtdb.firebaseio.com",
    projectId: "turkuvaztv",
    storageBucket: "turkuvaztv.appspot.com",
    messagingSenderId: "658662625077",
    appId: "1:658662625077:web:073c80780dca4a031a867c",
    measurementId: "G-S9NV1MLLGM"
};

const app = initializeApp(firebaseConfig);

export const firestorem = getFirestore(app);

export const auth = getAuth(app);
export const signUp = async(name, email, password) => {

    await createUserWithEmailAndPassword(auth, email, password);
    updateCurrentUser(auth, { displayName: name })
};


export const storage = getStorage(app);

export const signIn = async(auth, email, password) => {

    await signInWithEmailAndPassword(auth, email, password);
};
export const uidRef = "";
const diziRef = collection(firestorem, "Diziler");





export const useDizilerListener = () => {

    const [diziler, setDiziler] = useState([]);
    useEffect(() => {

        return onSnapshot(diziRef, (snaphot) => { setDiziler(snaphot.docs.map(doc => { const datam = doc.data(); return { id: doc.id, ...datam } })) });
    }, []);
    console.log("firebase" + diziler);
    return diziler;

}


export const useUserListener = () => {

    const uidRef = localStorage.getItem("uid");
    const userRef = doc(firestorem, "users", localStorage.getItem("uid"));
    const [user, setUser] = useState([]);
    const unsub = onSnapshot(userRef, (doc) => {
        setUser(doc.data());

    });
    return user;


}

export const useTurlerListener = (tur) => {
    const q = query(diziRef, where("kategori", "array-contains", tur));
    const [turler, setTurler] = useState([]);
    useEffect(() => {

        return onSnapshot(q, (snaphot) => { setTurler(snaphot.docs.map(doc => { const datam = doc.data(); return { id: doc.id, ...datam } })) });
    }, []);

    return turler;

}

export const useFavoritesListener = () => {


    const userlist = useUserListener();
    localStorage.setItem("favorites", "");
    const objArray = [];
    Object.keys(userlist.list).forEach(key => objArray.push({
        id: key,
        verticalimage: userlist.list[key].verticalimage,
        productname: userlist.list[key].productname,
        tur: userlist.list[key].tur,
        data: userlist.list[key]
    }));
    localStorage.setItem("favorites", JSON.stringify(objArray));


    return objArray;


}