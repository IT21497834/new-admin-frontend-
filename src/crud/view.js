import React, {useEffect, useState} from 'react'
import '../assets/css/style.css'
import customer01 from '../assets/imgs/customer01.jpg'
import customer02 from '../assets/imgs/customer02.jpg'

import { RiDashboardFill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoIosHome } from "react-icons/io";
import { RiHome6Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { GoSignOut } from "react-icons/go";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {

    const func = () => {
        // let toggle = document.querySelector(".toggle");
        let navigation = document.querySelector(".navigation");
        let main = document.querySelector(".main");
        navigation.classList.toggle("active");
        main.classList.toggle("active");
    }



    const [user,setUser]= useState({
        name:"",
        email:"",
        address:"",
        mobile:"",
        password:""

    })

    const {id}=useParams();

    useEffect(()=>{
        loadUser()
    },[])

    const loadUser =async ()=>{
        const result =await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)

    }




    return (
        <>
            {/* < !-- =============== Navigation ================ --> */}
            <div class="container11">
                <div class="navigation">
                    <ul>
                        <li>
                            <a href="#">
                <span class="icon">
                  <ion-icon name="logo-apple"></ion-icon>
                </span>
                                <span class="title">FRESCO</span>
                            </a>
                        </li>

                        <li>
                            <a href="/">
                <span class="icon">
                <RiDashboardFill size='2rem' />
                </span>

                                <span class="title">Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                <span class="icon">
                <AiTwotoneHome size='2rem' />
                </span>
                                <span class="title">Wedding Halls</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                <span class="icon">
                <RiHome6Fill size='2rem' />
                </span>
                                <span class="title">Conference Halls</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                <span class="icon">
                <IoIosHome size='2rem' />
                </span>
                                <span class="title">Venues</span>
                            </a>
                        </li>

                        <li>
                            <a href="/staffhome">
                <span class="icon">
                <IoIosPeople size='2rem' />
                </span>
                                <span class="title">Staff Crew</span>
                            </a>
                        </li>

                        <li>
                            <a href="/bookedevents">
                <span class="icon">
                <TbBrandBooking size='2rem' />
                </span>
                                <span class="title">Booked Events</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                <span class="icon">
                <GoSignOut size='2rem' />
                </span>
                                <span class="title">Sign Out</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <!-- ========================= Main ==================== --> */}
                <div class="main">
                    <div class="topbar">
                        <div class="toggle">
                            <AiOutlineMenuFold onClick={() => {func()}} size='2rem' />
                        </div>



                        <div class="user">
                            <img src={customer01} alt=""/>
                        </div>
                    </div>


                    {/* <!-- ================ Order Details List ================= --> */}
                    <div class="details">
                        <div class="recentOrders">
                            <div class="cardHeader">
                                <h2>Customer Details</h2>

                            </div>






                            <div className='container'>
                                <div className='row'>

                                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                                        <h2 className='text-center m-4'>User Details</h2>

                                        <div className='card'>
                                            <div className='card-header'>
                                                Details of user id:{user.id}
                                                <ul className = 'list-group list-group-flush'>

                                                    <li className='list-group-item'>
                                                        <b>Name:</b>
                                                        {user.name}
                                                    </li>


                                                    <li className='list-group-item'>
                                                        <b>Email:</b>
                                                        {user.email}
                                                    </li>

                                                    <li className='list-group-item'>
                                                        <b>Address:</b>
                                                        {user.address}
                                                    </li>


                                                    <li className='list-group-item'>
                                                        <b>Mobile:</b>
                                                        {user.mobile}
                                                    </li>


                                                    <li className='list-group-item'>
                                                        <b>Password:</b>
                                                        {user.password}
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>

                                        <Link className='btn btn-primary my-2' to={'/'}>
                                            Back to Home
                                        </Link>

                                    </div>
                                </div>
                            </div>





                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}

export default AdminDashboard