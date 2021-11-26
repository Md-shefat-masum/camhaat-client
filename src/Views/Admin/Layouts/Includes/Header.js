import React from 'react'
import { Link } from 'react-router-dom';
import { UseCommonData } from '../../../../Hooks/UseCommonData'
import HeaderNavRight from '../../../Components/Shared/HeaderNavRight';

function Header() {
    const {show_nav_bar,set_show_nav_bar} = UseCommonData();

    return (
        <div className="page-main-header">
            <div className="main-header-left">
                <div className="logo-wrapper">
                    <Link to="/">
                        <h5 className="text-dark">CamHaat</h5>
                    </Link>
                </div>
            </div>
            <div className="main-header-right row">
                <div className="mobile-sidebar col-1 ps-0">
                    <div className="text-start switch-sm">
                        <label className="switch">
                            <input type="checkbox" defaultChecked={show_nav_bar} onChange={()=>set_show_nav_bar(!show_nav_bar)} id="sidebar-toggle" ></input>
                            <span className="switch-state"></span>
                        </label>
                    </div>
                </div>
                <HeaderNavRight></HeaderNavRight>
            </div>
        </div>
    )
}

export default Header
