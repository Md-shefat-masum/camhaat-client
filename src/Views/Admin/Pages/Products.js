import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Products() {
    const [Products, setProducts] = useState([])
    useEffect(() => {
        load_Products();
    }, [])

    const load_Products = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/all-products`)
            .then(res=>{
                setProducts(res.data);
                console.log(res.data);
            })
    }
    

    const handle_delete = (id) => {
        window.confirm('sure want to make admin??') && 
        axios.get(`${process.env.REACT_APP_API_URL}/delete-product/${id}`)
            .then(res=>{
                // console.log(res.data);
                load_Products();
            })
    }
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h4>Produts</h4>
                </div>
                <div className="card-body table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Order Id</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col" className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Products.map(item => {
                                    return <tr key={item._id}>
                                        <td> #{item._id} </td>
                                        <td className="digits">
                                            <img style={{width:50}} src={process.env.REACT_APP_API_URL+'/'+item.image} alt="" />
                                        </td>
                                        <td className="font-secondary" width={{width: 200}}>{item.name}</td>
                                        <td className="font-info" width={{width: 150}}>$&nbsp;{item.price}</td>
                                        <td style={{ width: 200 }}>
                                            <div className="d-flex flex-wrap justify-content-center">
                                                <a href="#/" onClick={()=>handle_delete(item._id)} className="btn m-2 btn-air-danger">Delete</a>
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

export default Products
