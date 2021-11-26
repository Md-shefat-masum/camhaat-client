import React, { createContext, useEffect, useState } from 'react'
import { UseAuth } from '../Hooks/UseAuth';
import axios from 'axios';

export const CommonContext = createContext(null);

function CommonProvider({ children }) {
    const [ShowNavbar, setShowNavbar] = useState(true);
    const [ShowHeaderNavbar, setShowHeaderNavbar] = useState(true);
    const [DashCalenderDate, setDashCalenderDate] = useState('');
    const [CartList, setCartList] = useState([]);
    const [FavoriteList, setFavoriteList] = useState([]);
    const {user} = UseAuth();

    useEffect(() => {
        let window_width = window.innerWidth;
        if (window_width < 992) {
            setShowNavbar(false);
        }
    }, [])

    useEffect(() => {
        user.email &&
        axios.get(`${process.env.REACT_APP_API_URL}/carts?email=${user.email}`)
            .then(res=>{
                setCartList(res.data);
            })
    }, [user.email])

    const cart_page_qty_handler = (product, type, custom_qty = 1) => {
        console.log(custom_qty);
        // let temp_product = { ...product };
        let temp_product = CartList.find((item) => item._id === product._id);

        if (type === 'inc') {
            temp_product.qty++;
        }
        if (type === 'dec') {
            temp_product.qty > 1 && temp_product.qty--;
        }
        if (type === 'custom' && custom_qty > 0) {
            temp_product.qty = custom_qty;
        }

        axios.post(`${process.env.REACT_APP_API_URL}/update-cart/${temp_product._id}`,temp_product)
            .then(res=>{
                console.log(res.data);
            })
        
        let temp_cart = [...CartList].filter((item) => item._id === temp_product._id ? item = temp_product : item);
        // temp_cart.unshift(temp_product);
        setCartList(temp_cart);
        // console.log(CartQty, Product, custom_qty);
    }

    const remove_form_cart = (product) => {
        let temp_cart = [...CartList].filter((item) => item._id !== product._id);
        axios.delete(`${process.env.REACT_APP_API_URL}/delete-cart/${product._id}`)
            .then(res=>{
                console.log('delete');
            })
        setCartList(temp_cart);
    }

    const allContexts = {
        logo: 'logo.png',
        name: 'CamHaat',

        show_nav_bar: ShowNavbar,
        set_show_nav_bar: setShowNavbar,

        show_header_nav_bar: ShowHeaderNavbar,
        set_header_show_nav_bar: setShowHeaderNavbar,

        dash_calender_date: DashCalenderDate,
        set_dash_calender_date: setDashCalenderDate,

        cart_list: CartList,
        set_cart_list: setCartList,

        favorite_list: FavoriteList,
        set_favorite_list: setFavoriteList,

        cart_page_qty_handler,
        remove_form_cart,
    };
    return (
        <CommonContext.Provider value={allContexts}>
            {children}
        </CommonContext.Provider>
    )
}

export default CommonProvider
