import React, { useState, useEffect } from "react";
import { LOCAL_STORAGE_USER } from "./helpers/Http";
import { getLocalStorage } from "./helpers/Localstorage";

function GetMe() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = getLocalStorage(LOCAL_STORAGE_USER);
        setUser(user);
    }, []);

    return (user)
}
export default GetMe;   