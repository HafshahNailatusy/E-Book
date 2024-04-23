import React, { useEffect, useState } from "react";
import { getByID, updateKategori } from "./ApiKategori";
import { useNavigate, useParams } from "react-router-dom";


function Update() {
    const [namaKat, setNama] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await getByID(id);
                console.log(res)
                const kategori = res.data;
                setNama(kategori.namaKat);
            } catch (error) {
                console.log("Failed to fetch data");
            }
        };
        if (id) {
            fetchdata();
        }
    }, [id]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("namaKat", namaKat);

        try {
            console.log("update");
            const res = await updateKategori(id, formData);
            console.log(res.data)
            if (res.status === true) {
                navigate('/dashboard')
            }
        } catch (error) {
            console.log("failed to update category", error);
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <h1>Update Category</h1>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            id="nama"
                            placeholder="Nama"
                            value={namaKat}
                            onChange={(e) => setNama(e.target.value)}
                        />
                    </div>                    
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update;