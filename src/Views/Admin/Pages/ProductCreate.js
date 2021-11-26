import axios from 'axios';
import React from 'react'
import { UseAuth } from '../../../Hooks/UseAuth'

function ProductCreate() {
    let { user } = UseAuth();

    const submit_handler = (e) => {
        e.preventDefault();
        let form_data = new FormData(e.target);
        axios.post(`${process.env.REACT_APP_API_URL}/create-product`,form_data)
            .then(res=>{
                console.log(res);
                e.target.reset();
                window.toaster('success','product uploaded successfully');
            })
    }
    
    return (
        <div className="user-profile">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card hovercard text-center">
                        
                        <div className="info">
                        
                            <form action="" onSubmit={(e)=>submit_handler(e)} className="theme-form" encType="multipart/form-data">
                                <div className="card-header">
                                    <h5>Create Product</h5>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3 row">
                                        <label  className="col-sm-3 col-form-label">Product Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="name" className="form-control"  placeholder="" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label  className="col-sm-3 col-form-label">Price</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="price" className="form-control"  placeholder="" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label  className="col-sm-3 col-form-label">discount</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="discount" className="form-control"  placeholder="" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label  className="col-sm-3 col-form-label">description</label>
                                        <div className="col-sm-9">
                                            <textarea type="text" name="description" className="form-control"  placeholder="" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label  className="col-sm-3 col-form-label">Image</label>
                                        <div className="col-sm-9">
                                            <input type="file" name="image" className="form-control"  placeholder="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCreate
