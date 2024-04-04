import React, { useState, useEffect } from "react";
import { LOCAL_STORAGE_USER } from "./Etc/Http";
import { getLocalStorage } from "./Etc/LocalStorage";

function Dashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = getLocalStorage(LOCAL_STORAGE_USER);
        setUser(user);
    }, []);

    return (
        <div>
            <h1>Dashboard Admin</h1>
            <p> Saat ini anda login sebagai : {user?.nama}</p>
        </div>
    )
}
export default Dashboard;   