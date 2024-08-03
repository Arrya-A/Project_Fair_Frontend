import React from 'react'
import { Link } from 'react-router-dom'

function PagenotFound() {
  return (
    <div style={{width:'100%', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center' }}>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 d-flex justify-content-center align-items-center flex-column">
          <img src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" alt="no image" width={'100%'} height={'450px'} />
          <h1 className='mt-3'>Oops! Looks like you're lost</h1>
          <h5 className='mt-2'>The page you are looking is unavailable</h5>
<Link to={'/'}>
            <button className='btn btn-success mt-5 rounded-0'>Back Home</button>
  
</Link>        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  
  )
}

export default PagenotFound