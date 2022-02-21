import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
   return (
      <div id='layoutSidenav_content'>
         <main>
            <div className='container-fluid px-4 mt-4' >
             <h2><i className="fas fa-home"></i> Home</h2>
               <div className='row'>
                  <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'>
                     <div className="card bg-primary text-white mb-4 ">
                        <div className="card-body">New Clients</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                           <Link className="small text-white stretched-link" to="/clients">View Detail</Link>
                           <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                        </div>
                     </div>
                  </div>
                  <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'>
                     <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Flights </div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                           <Link className="small text-white stretched-link" to="/flights">View Detail</Link>
                           <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                        </div>
                     </div>
                  </div>
                  <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'>
                     <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Recive orders</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                           <Link className="small text-white stretched-link" to="/orders">View Detail</Link>
                           <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                        </div>
                     </div>
                  </div>
                  <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'>
                     <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Submit Airports</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                           <Link className="small text-white stretched-link" to="/airports">View Detail</Link>
                           <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
   )
}
