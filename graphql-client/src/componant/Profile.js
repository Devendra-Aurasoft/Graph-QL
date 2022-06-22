import React from 'react'

function Profile() {
  return (
    <>
    <div className="container-fluid  text-left  ">
        <div className="row">
            <div className="col-1 " >
              {/* <img src='https://www.istockphoto.com/photo/writing-letter-gm175384249-20047262' alt='' className='w-100 h-100 py-0'></img> */}
            </div>
            <div className="col-10 section">
               <h2>User Profile</h2>
               {/* <img>User img</img> */}
               <h4 className=''>Devendra Aele</h4>

               <h3 className='float-left text-left w-100 py-3 ps-5'> User Quotes</h3>
               <div className='quote mx-3 mx-1'>
                  <h5>user Quotes form input </h5>
                  <p>userID</p>
               </div>
            </div>
            <div className="col-1 " > </div>
        </div>
    </div>

</>
  )
}

export default Profile