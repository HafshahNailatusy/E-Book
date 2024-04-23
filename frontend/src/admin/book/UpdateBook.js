import React, { useEffect, useState } from "react";
import { getByID, getFoto, updateBook } from "./ApiBook";
import { useNavigate, useParams } from "react-router-dom";


function UpdateBook() {
    const { id } = useParams()
    const [judul, setJudul] = useState("");
    const [penulis, setPenulis] = useState(null);
    const [sinopsis, setSinopsis] = useState("");
    const [harga, setHarga] = useState("");
    const [foto, setFoto] = useState("");
    const [KategoriID, setKategoriID] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await getByID(id);
                console.log(res)
                const book = res.data;
                setJudul(book.judul);
                setPenulis(book.penulis);
                setSinopsis(book.sinopsis);
                setHarga(book.setHarga);
                if (book.foto) {
                    setImagePreview(getFoto(book.foto));
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
        formData.append("judul", judul);
        formData.append("penulis", penulis);
        formData.append("sinopsis", sinopsis);
        formData.append("harga", harga);
        formData.append("ID Kategori", KategoriID);
        if (foto) {
            formData.append("foto", foto[0]);
        }

        try {
            console.log("update");
            const res = await updateBook(id, formData);
            console.log(res.data)
            if (res.status === true) {
                navigate('/dashboard')
            }
        } catch (error) {
            console.log("failed to update book", error);
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <h1>Update Book</h1>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            id="judul"
                            placeholder="judul"
                            value={judul}
                            onChange={(e) => setJudul(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            id="penulis"
                            placeholder="penulis"
                            value={penulis}
                            onChange={(e) => setPenulis(e.target.value)}
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
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            className="form-control"
                            id="harga"
                            placeholder="harga"
                            value={harga}
                            onChange={(e) => setHarga(e.target.value)}
                            min={0}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            className="form-control"
                            id="KategoriID"
                            placeholder="KategoriID"
                            value={KategoriID}
                            onChange={(e) => setKategoriID(e.target.value)}
                            min={0}
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

export default UpdateBook;