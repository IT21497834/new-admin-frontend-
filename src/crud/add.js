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
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {

    const func = () => {
        // let toggle = document.querySelector(".toggle");
        let navigation = document.querySelector(".navigation");
        let main = document.querySelector(".main");
        navigation.classList.toggle("active");
        main.classList.toggle("active");
    }


    let navigate = useNavigate()

    const [user,setUser]=useState ({
        name:"",
        password:"",
        email:"",
        address:"",
        mobile:""
    })

    const{name,password,email,address,mobile}=user

    // here

    const onInputChange=(e)=>{

        setUser({...user ,[e.target.name]:e.target.value});

    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/")
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
                                <h2>Add Customers</h2>

                            </div>





                            <div className='container'>
                                <div className='row'>

                                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                                        <h2 className='text-center m-4'>Register User</h2>

                                        <form onSubmit={(e)=>onSubmit(e)}>
                                            <div className='mb-3'>
                                                <label htmlFor='Name' className='form-label'>
                                                    Name
                                                </label>
                                                <input
                                                    type={'text'}
                                                    className='form-control'
                                                    placeholder='Enter Your Name'
                                                    name='name'
                                                    value={name}
                                                    onChange={(e)=>onInputChange(e)}
                                                />


                                            </div>
                                            <div className='mb-3'>
                                                <label htmlFor='Password' className='form-label'>
                                                    Password
                                                </label>
                                                <input
                                                    type={'text'}
                                                    className='form-control'
                                                    placeholder='Enter Your Password'
                                                    name='password'
                                                    value={password}
                                                    onChange={(e)=>onInputChange(e)}
                                                />


                                            </div>
                                            <div className='mb-3'>
                                                <label htmlFor='Email' className='form-label'>
                                                    Email
                                                </label>
                                                <input
                                                    type={'text'}
                                                    className='form-control'
                                                    placeholder='Enter Your Email'
                                                    name='email'
                                                    value={email}
                                                    onChange={(e)=>onInputChange(e)}
                                                />

                                            </div>


                                            <div className='mb-3'>
                                                <label htmlFor='Address' className='form-label'>
                                                    Address
                                                </label>
                                                <input
                                                    type={'text'}
                                                    className='form-control'
                                                    placeholder='Enter Your Address'
                                                    name='address'
                                                    value={address}
                                                    onChange={(e)=>onInputChange(e)}
                                                />

                                            </div>


                                            <div className='mb-3'>
                                                <label htmlFor='Mobile' className='form-label'>
                                                    Mobile Number
                                                </label>
                                                <input
                                                    type={'text'}
                                                    className='form-control'
                                                    placeholder='Enter Your Mobile number'
                                                    name='mobile'
                                                    value={mobile}
                                                    onChange={(e)=>onInputChange(e)}
                                                />

                                            </div>

                                            <button type='submit' className='btn btn-outline-primary'>Submit</button>
                                            <Link className='btn btn-outline-danger mx-2' to="/"> Cancel</Link>

                                        </form>
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