import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./user.css";
const User = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:4000/api/read");
            setUsers(response.data);
        }
        fetchData();
    }, []);

    return (
        <div className="userTable">
            <Link to={'/add'} className="addbtn"><i className="fa-solid fa-user-plus"></i>  AddUser</Link >
            <table border={1} cellSpacing={0} cellPadding={10}>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>User Name</th>
                        <th>Email Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}.</td>
                                <td>{user.fname} {user.lname}</td>
                                <td>{user.email}</td>
                                <td className="actionbtn">
                                    <button><i className="fa-solid fa-trash"></i></button>
                                    <Link to={`/edit/${user._id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </div>
    )
}

export default User;