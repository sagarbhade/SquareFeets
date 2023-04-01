import { useState, useEffect } from "react";
import axios from "axios";

export default function useBuilderProfile() {

    const [userData, setUserData] = useState();
    console.log(userData);

    let localData = JSON.parse(localStorage.getItem("loginData"));

    useEffect(() => {
        void (async () => {
            const { data } = await axios.get(`http://localhost:8083/api/auth/getUserData/${localData.userId}`)
            if (data) {
                setUserData({
                    username: data.username,
                    email: data.email,
                    city: data.address.city,
                    state: data.address.state,
                    mobileNo: data.mobileNo,
                    approvalStatus: data.builder.approvalStatus,
                    NumberOfProperties: data.property.length
                });
            }
        })();
    }, []);
    return {
        userData: userData || []
    }

}