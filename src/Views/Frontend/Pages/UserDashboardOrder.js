import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UseAuth } from '../../../Hooks/UseAuth';

function UserDashboardOrder() {
    const [Orders, setOrders] = useState([]);
    const { user } = UseAuth();
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/orders?email=${user.email}`)
            .then(res => {
                setOrders(res.data);
                console.log(res.data);
            })
    }, [])
    return (
        <div >
            <h4>Orders</h4>
            <div className="myaccount-table table-responsive text-center">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            Orders.map(item => {

                                return <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.user_email}</td>
                                    <td>{item.created_at}</td>
                                    <td>{item.status}</td>
                                    <td>${item.order_total}</td>
                                    <td><Link to={`/auth/profile/order-details/${item._id}`} className="btn btn-outline-info">View</Link></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserDashboardOrder
