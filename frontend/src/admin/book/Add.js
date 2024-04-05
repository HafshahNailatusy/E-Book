import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "./ApiBook";

function AddBook() {
    const [judul, setJudul] = useState("");
    const [penulis, setPenulis] = useState(null);
    const [sinopsis, setSinopsis] = useState("");
    const [harga, setHarga] = useState("");
    const [foto, setFoto] = useState("");
    const [KategoriID, setKategoriID] = useState("");
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
        formData.append("judul", judul);
        formData.append("penulis", penulis);
        formData.append("sinopsis", sinopsis);
        formData.append("harga", harga);
        formData.append("foto", foto);
        formData.append("ID Kategori", KategoriID);

        try {
            const res = await addByAdmin(formData);
            console.log(res)
            if (res.status === true) {
                navigate('/dashboard')
            }
        } catch (error) {
            console.log("failed to add book", error);
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <h1>Add Book</h1>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            id="judul"
                            placeholder="Judul"
                            value={judul}
                            onChange={(e) => setJudul(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            id="penulis"
                            placeholder="Penulis"
                            value={penulis}
                            onChange={(e) => setPenulis(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            id="sinopsis"
                            placeholder="sinopsis"
                            value={sinopsis}
                            onChange={(e) => setSinopsis(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            min={0}
                            className="form-control"
                            id="harga"
                            placeholder="harga"
                            value={harga}
                            onChange={(e) => setHarga(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            min={0}
                            className="form-control"
                            id="KategoriID"
                            placeholder="KategoriID"
                            value={KategoriID}
                            onChange={(e) => setKategoriID(e.target.value)}
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

export default AddBook;