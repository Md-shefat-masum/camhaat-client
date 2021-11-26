import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Users() {
    const [Users, setUsers] = useState([])
    useEffect(() => {
        load_Users();
    }, [])

    const load_Users = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/all-users`)
            .then(res=>{
                setUsers(res.data);
                console.log(res.data);
            })
    }
    

    const handle_accept = (id) => {
        window.confirm('sure want to make admin??') && 
        axios.get(`${process.env.REACT_APP_API_URL}/accept-admin/${id}`)
            .then(res=>{
                // console.log(res.data);
                load_Users();
            })
    }
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h4>Users</h4>
                </div>
                <div className="card-body table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">User id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col" className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Users.map(item => {
                                    return <tr key={item._id}>
                                        <td> #{item._id} </td>
                                        <td className="digits">{item.first_name} </td>
                                        <td className="">{item.last_name} </td>
                                        <td className="">{item.displayName} </td>
                                        <td className="">{item.email} </td>
                                        <td className="font-info">{item.role} </td>
                                        <td style={{ width: 200 }}>
                                            <div className="d-flex flex-wrap justify-content-center">
                                                <a href="#/" onClick={()=>handle_accept(item._id)} className="btn m-2 btn-air-secondary">Make Admin</a>
                                            </div>
                                        </td>
                                    </tr>
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users
