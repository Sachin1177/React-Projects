import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom';

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://6582bd1602f747c8367a1253.mockapi.io/CRUD/${id}`, {
            name: name,
            email: email,
        })
            .then(() => {
                navigate('/read')
            })
    }
    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, [])

    return (
        <>
            <h2>Update</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <button type="submit" className="btn btn-primary"
                    onClick={handleUpdate}
                >Update</button>
                <Link to="/read">
                    <button className="btn btn-warning m-3">Back</button>
                </Link>

            </form>

        </>
    )
}

export default Update
