import { useState, useEffect } from "react";
import axios from "axios";

export function useProperties() {

    const [properties, setProperties] = useState([]);

    let localData = JSON.parse(localStorage.getItem("loginData"));

    useEffect(() => {
        void (async () => {
            // const { data } = await axios.get(`http://localhost:8083/api/auth/property/`)
            const { data } = await axios.get(`http://localhost:8083/api/auth/builderproperty/${localData.builderId}`)
            if (data) {
                setProperties(data.property);
            }
        })();
    }, []);
    return {
        properties: properties || []
    }

}