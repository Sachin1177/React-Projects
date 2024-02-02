import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Read = () => {

    const [data, setData] = useState([]);
    const [tabledark, setTableDark] = useState([]);

    const getdata = () => {
        axios.get('https://6582bd1602f747c8367a1253.mockapi.io/CRUD')
            .then((res) => setData(res.data))
    }

    const deleteHandle = (id) => {
        axios.delete(`https://6582bd1602f747c8367a1253.mockapi.io/CRUD/${id}`)
            .then(() => {
                getdata();
            })
    }

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);

    }
    useEffect(() => {
        getdata();
        console.log(data)
    }, [])

    return (
        <>
            <div className="form-check form-switch m-2">
                <input className="form-check-input " type="checkbox" onClick={() => {
                    if (tabledark == "table-dark")
                        setTableDark("");
                    else
                    setTableDark("table-dark");
                }} />
            </div>
            <div className="d-flex justify-content-between m-3">
                <h2>READ Operation</h2>
                <Link to="/">
                    <button className="btn btn-primary">Create Data</button>
                </Link>
            </div>
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((eachData) => (
                            <tr key={eachData.id}>
                                <th scope="row">{eachData.id}</th>
                                <td>{eachData.name}</td>
                                <td>{eachData.email}</td>
                                <td>
                                    <Link to="/update">
                                        <button className="btn-success" onClick={() => setToLocalStorage(
                                            eachData.id,
                                            eachData.name,
                                            eachData.email
                                        )}>Edit</button>
                                    </Link>

                                </td>
                                <td><button className="btn-danger" onClick={() => deleteHandle(eachData.id)}>Delete</button></td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </>
    )
}

export default Read
