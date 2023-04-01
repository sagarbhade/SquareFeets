import { useState, useEffect } from "react";
import axios from "axios";

export default function usePropertyListings() {

    const [userData, setUserData] = useState();
    console.log(userData);

    let localData = JSON.parse(localStorage.getItem("loginData"));

    useEffect(() => {
        void (async () => {
            const { data } = await axios.get(`http://localhost:8083/api/auth/property`)
            if (data) {
                setUserData(data);
            }
        })();
    }, []);
    return {
        userData: userData || []
    }

}