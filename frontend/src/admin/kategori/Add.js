import { addKategori } from "./ApiKategori";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddKategori() {
    const [namaKat, setNama] = useState("");
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("namaKat", namaKat);
        try {
            const res = await addByAdmin(formData);
            console.log(res)
            if (res.status === true) {
                navigate('/dashboard')
            }
        } catch (error) {
            console.log("failed to add category", error);
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <h1>Add Category</h1>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            id="nama"
                            placeholder="Nama"
                            value={namaKat}
                            onChange={(e) => setNama(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}
export default AddKategori;