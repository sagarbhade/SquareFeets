import { useState, useEffect } from "react";
import axios from "axios";

export function useCustomerProfile() {

    const [userData, setUserData] = useState();

    let localData = JSON.parse(localStorage.getItem("loginData"));

    useEffect(() => {
        void (async () => {
            // const { data } = await axios.get(`http://localhost:8083/api/auth/property/`)
            const { data } = await axios.get(`http://localhost:8083/api/auth/getUserData/${localData.userId}`)
            if (data) {
                setUserData({
                    username: data.username,
                    email: data.email,
                    city: data.address.city,
                    state: data.address.state
                });
            }
        })();
    }, []);
    return {
        userData: userData || []
    }

}