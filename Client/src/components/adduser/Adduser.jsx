import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';

import "./add.css";

const Adduser = () => {
    const users = {
        fname: "",
        lname: "",
        email: "",
        password: ""
    };

    const [user, setUser] = useState(users);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        // console.log(user);
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/api/create", user);
            console.log(response);
            toast.success(response.data.msg, { position: "top-center" });
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    };      

    return (
        <div className="addUser">
            <Link to={"/"} className="backbtn">
                <i className="fa-solid fa-circle-arrow-left"></i> Back
            </Link>
            <h3>Add New User</h3>
            <form className="addUserForm" onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        onChange={inputHandler}
                        id="fname"
                        name="fname"
                        autoComplete="off"
                        placeholder="First Name"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        onChange={inputHandler}
                        id="lname"
                        name="lname"
                        autoComplete="off"
                        placeholder="Last Name"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        onChange={inputHandler}
                        id="email"
                        name="email"
                        autoComplete="off"
                        placeholder="Email"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        onChange={inputHandler}
                        id="password"
                        name="password"
                        autoComplete="off"
                        placeholder="Password"
                    />
                </div>
                <div className="inputGroup">
                    <button type="submit">ADD USER</button>
                </div>
            </form>
        </div>
    );
};

export default Adduser;
