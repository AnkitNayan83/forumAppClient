import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import './editUser.scss'

export const EditUser = () => {
  return (
    <div className='EditUser'>
    <Navbar/>
    <div className="edituser-container">
        <div className="edituser-wrapper">
        <div className='left-part'>
          <div className='input-user-img'>
            <label htmlFor='inputImg' className='labelImg'>
              <img src="/assests/user.png" alt="name" />
            </label>
            <input
              className='inputImg'
              id='inputImg'
              type='file'
              accept='image/*'
            />
          </div>
        </div>
        <div className='right-part'>
          <form >
            <input
              type='text'
              placeholder='Your Name'
            />
            <input
              type='text'
              placeholder='Location'  
            />

             <input
              type='text'
              placeholder='Title'
            />
             <input
              type='text'
              placeholder='About me'  
            />

            <div className="links">
            <h4>Links:</h4>
            <input
              type='text'
              placeholder= "Portfolio Link"  
            />
             <input
              type='text'
              placeholder='Github Link'  
            />
            </div>
            
            <input
              type='submit'
              className='btn-primary'
              value="Save Profile"
            />
          </form>

          <button className='del-account btn-primary' >
            Delete Account
          </button>
        </div>
        </div>
    </div>
    </div>
  )
}
