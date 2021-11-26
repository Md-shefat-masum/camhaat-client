import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function UserDashboardOrderDetails() {
    let params = useParams();
    const [Order, setOrder] = useState({})

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/order-details/${params.id}`).then(res => res.json())
            .then(data => {
                console.log(data);
                setOrder(data);
            })
    }, []);

    return (
        <div>
            <h4>Ordered Products</h4>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th style={{ width: "50%" }}>Product</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Order.products &&
                        Order.products.map(item => {
                            const { price, qty, discount } = item;
                            let final_price = price;
                            if (discount) {
                                final_price = (price - (price * discount / 100)).toFixed(2);
                            }
                            return <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.qty}</td>
                                <td>$ {price * qty}</td>
                            </tr>
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td colSpan="">$ {Order.order_total}</td>
                    </tr>
                </tfoot>
            </table>
            <h4 className="mt-5">Billing details</h4>
            <div className="row mt-3">
                <div className="col-md-6">
                    <table className="table text-center">
                        <tbody>
                            <tr>
                                <th>First Name</th>
                                <td style={{ width: 5 }}>:</td>
                                <td>{Order.first_name}</td>
                            </tr>
                            <tr>
                                <th>Last Name</th>
                                <td style={{ width: 5 }}>:</td>
                                <td>{Order.last_name}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td style={{ width: 5 }}>:</td>
                                <td>{Order.email}</td>
                            </tr>
                            <tr>
                                <th>Contact Number</th>
                                <td style={{ width: 5 }}>:</td>
                                <td>{Order.contact_number}</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td style={{ width: 5 }}>:</td>
                                <td>{Order.address}</td>
                            </tr>
                            <tr>
                                <th>Contry</th>
                                <td style={{ width: 5 }}>:</td>
                                <td>{Order.country}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserDashboardOrderDetails
