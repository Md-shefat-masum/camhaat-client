import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductBody from '../components/ProductBody'

function Product() {
    const [Products, setProducts] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products?limit=`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <section>
            <div className="banner product_details">
                <div className="container d-flex flex-column justify-content-center h-100" style={{ background: 'rgba(0,0,0,.3)', backdropFilter: 'blur(3px)' }}>
                    <h2 className="page-title text-light mb-2">{"Products List"}</h2>
                    <ul className="page-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li>{'products'}</li>
                    </ul>
                </div>
            </div>
            <section className="my-5 py-5">
                <div className="container">
                    <div className="row">
                        {
                            Products.map((item) => {
                                return <div className="col-md-3 mb-4" key={item._id}>
                                    <ProductBody product={item}></ProductBody>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>

        </section>
    )
}

export default Product
