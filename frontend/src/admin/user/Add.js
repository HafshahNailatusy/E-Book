import { addByAdmin } from './ApiUser'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
    const [nama, setNama] = useState("");
    const [foto, setFoto] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imagePreview, setImagePreview] = useState(null);

    const navigate = useNavigate()

    const saveFile = (e) => {
        const file = e.target.files[0];
        console.log(file)
        setFoto(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama", nama);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("foto", foto);

        try {
            const res = await addByAdmin(formData);
            console.log(res)
            if (res.status === true) {
                navigate('/dashboard')
            }
        } catch (error) {
            console.log("failed to add user", error);
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <h1>Add User</h1>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            id="nama"
                            placeholder="Nama"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            accept="image/*"
                            type="file"
                            onChange={saveFile}
                        />
                    </div>
                    < br />
                    {imagePreview && (
                        <div
                            style={{
                                marginLeft: "0.5rem",
                                marginTop: "0.3rem",
                                display: "flex",
                                gap: "10px"
                            }}
                        >
                            <div style={{ marginTop: "2rem" }}>
                                <p>Preview:</p>
                            </div>
                            <img
                                src={imagePreview}
                                alt=''
                                width={100}
                                height={100}
                                style={{ aspectRatio: "3/2", objectFit: "contain" }}
                            />
                        </div>
                    )}
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}


export default Add;