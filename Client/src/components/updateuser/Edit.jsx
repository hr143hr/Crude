import "../adduser/add.css";
import { Link, useParams,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';

const Edit = () => {

    const initialUser = {
        fname: "",
        lname: "",
        email: ""
    };
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState(initialUser);

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(user);
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/api/readone/${id}`)
            .then((response) => {
                // console.log(response);
                setUser(response.data);  // Assuming the API response has the user data directly
            })
            .catch((error) => { console.log(error.message); });
    }, [id]);


    const submitUpdateForm = async (e)=> {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:4000/api/update/${id}`, user);
            console.log(response);
            toast.success(response.data.msg, { position: "top-center" });
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    } 

    return (
        <div className="addUser">
            <Link to={"/"} className="backbtn"><i className="fa-solid fa-circle-arrow-left"></i>Back</Link>
            <h3>Update User</h3>
            <form className="addUserForm" onSubmit={submitUpdateForm}>
                <div className="inputGroup">
                    <label htmlFor="fname">Frist Name</label>
                    <input type="text" value={user.fname} onChange={inputChangeHandler} id="fname" name="fname" autoComplete="off" placeholder="Frist Name" />
                </div>
                <div className="inputGroup">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" value={user.lname} onChange={inputChangeHandler} id="lname" name="lname" autoComplete="off" placeholder="Last Name" />
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={user.email} onChange={inputChangeHandler} id="email" name="fname" autoComplete="off" placeholder="Email" />
                </div>
                <div className="inputGroup">
                    <button type="submit">UPDATE USER</button>
                </div>
            </form>

        </div>
    )
}

export default Edit