import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Orders() {
    const [Orders, setOrders] = useState([])
    useEffect(() => {
        load_orders();
    }, [])

    const load_orders = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/all-orders`)
            .then(res=>{
                setOrders(res.data);
                console.log(res.data);
            })
    }
    

    const handle_accept = (id) => {
        axios.get(`${process.env.REACT_APP_API_URL}/accept-order/${id}`)
            .then(res=>{
                // console.log(res.data);
                load_orders();
            })
    }
    
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h4>Orders</h4>
                </div>
                <div className="card-body table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Order Id</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Amount</th>
                                <th scope="col" className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Orders.map(item => {
                                    return <tr key={item._id}>
                                        <td> #{item._id} </td>
                                        <td className="digits">{item.created_at}</td>
                                        <td className="font-secondary">{item.status}</td>
                                        <td className="font-info">$ {item.order_total}</td>
                                        <td style={{ width: 350 }}>
                                            <div className="d-flex flex-wrap justify-content-center">
                                                <Link to={"/dashboard/order-details/"+item._id} className="btn m-2 btn-air-secondary">Details</Link>
                                                <a href="#/" onClick={()=>handle_accept(item._id,item)} className="btn m-2 btn-air-success">Accept</a>
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

export default Orders
