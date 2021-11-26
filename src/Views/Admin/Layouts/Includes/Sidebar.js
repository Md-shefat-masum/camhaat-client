import React from 'react'
import { Link } from 'react-router-dom'
import SidebarUser from '../../../Components/Shared/SidebarUser'

function Sidebar() {
    return (
        <div className="page-sidebar custom-scrollbar page-sidebar-open">
            <SidebarUser></SidebarUser>
            <ul className="sidebar-menu">
                <li>
                    <div className="sidebar-title">General
                        {/* <span className="badge badge-success pull-right">Exclusive</span> */}
                    </div>
                    <Link to="/dashboard" className="sidebar-header">
                        <i className="icon-notepad"></i>
                        <span>Dasboard</span>
                    </Link>
                    <Link to="/dashboard/orders" className="sidebar-header">
                        <i className="icon-gift"></i>
                        <span>Orders</span>
                    </Link>
                    <Link to="/dashboard/profile" className="sidebar-header">
                        <i className="icon-user"></i>
                        <span>Profile</span>
                    </Link>
                </li>
                <li>
                    <div className="sidebar-title">Manage</div>
                    <Link to="/dashboard/users" className="sidebar-header">
                        <i className="icon-shopping-cart-full"></i>
                        <span>Users</span>
                    </Link>
                    <Link to="/dashboard/products" className="sidebar-header">
                        <i className="icon-shopping-cart"></i>
                        <span>Products</span>
                    </Link>
                    <Link to="/dashboard/create-product" className="sidebar-header">
                        <i className="fa fa-shopping-basket"></i>
                        <span>Create Product</span>
                    </Link>
                    {/* <Link to="#/" className="sidebar-header">
                        <i className="icon-bookmark-alt"></i>
                        <span>Logout</span>
                    </Link> */}
                </li>

                <li>
                    <div className="sidebar-title">Extra</div>
                    <Link to="/" className="sidebar-header">
                        <i className="icon-world"></i>
                        <span>Goto Website</span>
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar
