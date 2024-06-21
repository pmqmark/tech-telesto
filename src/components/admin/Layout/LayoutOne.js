import React, { useContext, useState } from 'react'
import productimage from './Picsart_22-06-19_23-04-22-074-01 (1) 1.png'
import iconone from './raphael_piechart.png'
import icontwo from './material-symbols_category.png'
import iconthree from './Vector.png'
import iconfour from './Vectortwo.png'
import iconfive from './Vectorthree.png'
import iconSix from './Vectorfour.png'
import iconSeven from './ooui_image-gallery.png'
import './LayoutOne.css'
import { Link, NavLink, Navigate } from 'react-router-dom'
import AuthContext from '../../../context/AuthProvider'



function LayoutOne({ children }) {

    // const { setAuth } = useContext(AuthContext)
    // const navigate = Navigate();

    // const LogoutHandler = () => {
    //     setAuth({});
    //     navigate('/admin/login')
    // }


    return (
        <div className='productsMain'>
            <div className='productsleftContainer'>
                <div className='productsleftimage'>
                    <Link to='/'>
                        <img src={productimage} alt="" />
                    </Link>
                </div>
                <div className='productsleftArea'>
                    <div className='leftAreaicons'>

                        <NavLink to='/admin/dashboard' className='linkproducts'  >
                            <img src={iconone} alt="" />
                            <p>Dashboard</p>
                        </NavLink >

                    </div>
                    <div className='leftAreaicons'>
                        <NavLink to='/admin/category' className='linkproducts'>
                            <img src={icontwo} alt="" />
                            <p>Category</p>
                        </NavLink>
                    </div>
                    <div className='leftAreaicons specific'>
                        <NavLink to='/admin/products' className='linkproducts'>
                            <img src={iconthree} alt="" />
                            <p>Products</p>
                        </NavLink>
                    </div>
                    <div className='leftAreaicons specific'>
                        <NavLink to='/admin/gallery' className='linkproducts'>
                            <img src={iconSeven} alt="" />
                            <p>Gallery</p>
                        </NavLink>
                    </div>
                    <div className='leftAreaicons specificone'>
                        <NavLink to='/admin/bookings' className='linkproducts'>
                            <img src={iconfour} alt="" />
                            <p>Bookings</p>
                        </NavLink>
                    </div>
                    <div className='leftAreaicons'>
                        <NavLink to='/admin/blogs' className='linkproducts'>
                            <img src={iconfive} alt="" />
                            <p>Blogs</p>
                        </NavLink>
                    </div>
                    <div className='leftAreaicons specifictwo'>
                        <NavLink to='/admin/orders' className='linkproducts'>
                            <img src={iconSix} alt="" />
                            <p>Orders</p>
                        </NavLink>
                    </div>


                </div>
                <div>
                    <button className='buttonLogout' >Log Out </button>
                </div>

            </div>
            <div className='rightAreaProducts'>
                <div className='bg-changingContainer'>
                    {children}
                </div>

            </div>

        </div>
    )
}

export default LayoutOne