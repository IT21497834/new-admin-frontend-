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



  const[users,setUsers]=useState([]);

  const {id}=useParams()

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers=async()=>{
    const result  =await axios.get("http://localhost:8080/users")
    setUsers(result.data);
  }

  const deleteUser =async (id)=> {
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers()
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

            <div className="search">
              <label>

                <input type="text" placeholder="Search here...." onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}/>
                <i id="eyeIcon" className="fa-regular fa-eye"></i>

              </label>
            </div>

            <div class="user">
              <img src={customer01} alt=""/>
            </div>
          </div>


          {/* <!-- ================ Order Details List ================= --> */}
          <div class="details">
            <div class="recentOrders">
              <div class="cardHeader">
                <h2>Customer table</h2>

              </div>

              <div className='addcus'>
                    <Link className='btn btn-primary' to="/add">
                      Add Customer
                    </Link>
              </div>


              <div className='container'>

                <div className='py-4'>



                  <table className="table border shadow">
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Password</th>
                      <th scope="col">Email</th>
                      <th scope="col">Address</th>
                      <th scope="col">Mobile</th>
                      <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                      users.filter((val) => {
                        if(searchTerm == ""){
                          return val;
                        }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                          return val;
                        }
                      }).map((user,index)=>(
                          <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.password}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.mobile}</td>
                            <td>
                              {/* <button className="btn btn-primary mx-2">View</button> */}
                              <Link className="btn btn-primary mx-2"
                                    to={`/view/${user.id}`}>

                                View</Link>

                              <Link className="btn btn-outline-primary mx-2"
                                    to={`/edit/${user.id}`}
                              >Edit</Link>

                              <button className="btn btn-danger mx-2"
                                      onClick={() => deleteUser(user.id)}
                              >Delete</button>


                            </td>


                          </tr>

                      ))
                    }

                    </tbody>
                  </table>

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