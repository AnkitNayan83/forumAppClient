import React from 'react'
import { Item } from '../../components/item/Item'
import { Navbar } from '../../components/navbar/Navbar'
import {SlCalender} from 'react-icons/sl'
import {FaPen} from 'react-icons/fa'
import './user.scss'
export const User = () => {
  return (
    <div className='User'>
        <Navbar/>
        <div className="user-container">
            <div className="user-wrapper">
                <div className="personal-info">
                    <div className="left-part">
                    <div className="img-container">
                        <img src="/assests/user.png" alt="profile" />
                    </div>
                    <div className="info-container">
                        <h2>User Name</h2>
                        <p><SlCalender className='icon'/> Joined at : 23rd March</p>
                    </div>
                    </div>
                    <div className="right-part">
                        <div className="update-profile">
                            <button className='btn-profil'> <div className="info"><FaPen className='pen'/> <p>Edit Profile</p></div> </button>
                        </div>
                    </div>
                </div>

                <div className="item-container">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                </div>
            </div>
        </div>
    </div>
  )
}