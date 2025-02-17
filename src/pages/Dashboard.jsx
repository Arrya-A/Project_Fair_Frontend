import React from 'react'
import Header from '../components/Header'
import MyProject from '../components/MyProject'
import Profile from '../components/Profile'



function Dashboard() {
  return (
    <>
      <Header/>
      <div className="container-fluid">
        <h3 className='mt-4 ms-3'>Welcome <span className='text-warning'>User</span></h3>
        <div className="row">
          <div className="col-md-8 px-md-5">
            <MyProject/>
          </div>
          <div className="col-md-4 px-md-5">
          <Profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard