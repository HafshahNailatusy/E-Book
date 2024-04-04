import React, { useEffect, useState } from "react";
import { getByID, getFoto, updateUser } from "./ApiUser";
import { useNavigate, useParams } from "react-router-dom";


function Update() {
    const { id } = useParams()
    const [nama, setNama] = useState("");
    const [foto, setFoto] = useState(null);
    const [email, setEmail] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [decode, setDecode] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await getByID(id);
                console.log(res)
                const user = res.data;
                setNama(user.nama);
                setFoto(user.foto);
                setEmail(user.email);
                if (user.foto) {
                    setImagePreview(getFoto(user.foto));
                }
            } catch (error) {
                console.log("Failed to fetch data");
            }
        };
        if (id) {
            fetchdata();
        }
    }, [id]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
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
        formData.append("foto", foto);

        try {
            console.log("update");
            const res = await updateUser(id, formData);
            console.log(decode.UserID, "dec");
            console.log(id, "id");
            if (id === decode.id_user.toString()) {
                window.localStorage.removeItem('nama');
                window.localStorage.setItem('nama', nama)
            }
            console.log(res.data)
            if (res.status === true) {
                navigate('/dashboard')
            }
        } catch (error) {
            console.log("failed to update user", error);
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <h1>Update User</h1>
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
                            type="file"
                            className="form-control"
                            id="foto"
                            onChange={handleImageChange}
                        />
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
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update;