import React, {useEffect, useState} from 'react'
import { airportApi} from '../api/airportApi'
import { toast } from 'react-toastify'
import { Loading } from "../components/Loader/Loading";


const Airport = () => {
   const [name, setName] = useState('')
   const [country, setCountry] = useState('')
   const [data, setData] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [updateName, setUpdateName] = useState('')
   const [updateCountry, setUpdateCountry] = useState('')
   const [searchFilter, setSearchFilter] = useState('')

   const getAll = async () => {
      try {
         const res = await airportApi.getAll()
         res.data.airports ? setData(res.data.airports.reverse()) : setData([])
         setIsLoading(true)
      } catch (err) {
         setData([])
      }
   }

   useEffect(() => {
      getAll() 
   }, [])

   const createAirport = async (e) => {
      e.preventDefault()
      const check = {
         name: name.trim().length === 0,
         country: country.trim().length === 0
      }

      if (check.name || check.country) {
         toast.error("Barcha ma'lumotlar to'ldirishi shart")
         return
      }

      const params = {
         name: name,
         country: country
      }
      try {
         await airportApi.create(params)
         toast.success("airport yaratildi")
         setName('')
         setCountry('')
         getAll()
      } catch (err) {
         toast.error('Xatolik')
      }
   }

   const deleteAirport = async (e, id) => {
      try {
         await airportApi.delete(id)
         toast.success("airport o'chirildi")
         getAll()
      } catch (err) {
         console.log(err);
      }
   }

   const updateAirport = async (e, id) => {
      e.preventDefault()
      const check = {
         name: updateName.trim().length === 0,
         country: updateCountry.trim().length === 0
      }

      if (check.name || check.country) {
         toast.error("Barcha ma'lumotlar to'ldirishi shart")
         return
      }

      const params = {
         name: updateName,
         country: updateCountry
      }
      try {
         await airportApi.update(id, params)
         toast.success("airport tahrirlandi")
         window.location.reload()
      } catch (err) {
         toast.error("Xatolik") 
      }
   }

   const filter = data.filter(item => item.name.toLowerCase().includes(searchFilter.toLowerCase()) || item.country.toString().includes(searchFilter))
   return (
      <div id='layoutSidenav_content'>
         <main>
            <div className='container-fluid px-4 mt-4'>
               <h2><i className="fas fa-plane"></i>Airports</h2>

               <form className='row' onSubmit={createAirport}>
                  <div className='col-lg-6 col-md-6 col-12 mb-3'>
                     <input type="country" className='form-control' placeholder=' Country Airport' value={country} onChange={e => setCountry(e.target.value)} />
                  </div>
                  <div className='col-lg-6 col-md-6 col-12 mb-3'>
                     <input type="text" className='form-control' placeholder='name' value={name} onChange={e => setName(e.target.value)}  />
                  </div>
                  <div className='col-lg-6 col-md-6 col-12 mb-3'>
                     <button className='btn btn-success'>
                        <i className='fas fa-plus'></i> Create
                     </button>
                  </div>
               </form>

               <div className='row'>
                  <div className="col-12">
                     <input type="text" className='form-control mb-3' placeholder='search client country or name' value={searchFilter} onChange={e => setSearchFilter(e.target.value)} />
                     {data.length > 0 ? (
                        <div className='table-responsive'>
                        {isLoading ? (
                              <table className='table table-striped table-bordered table-hover text-center'>
                                 <thead>
                                    <tr>
                                       <td>#</td>
                                       <td>Name</td>
                                       <td>Country</td>
                                       <td>Update</td>
                                       <td>Delete</td>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    {searchFilter.length > 0 ? (
                                       <>
                                          {filter.map((item, index) => (
                                             <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.country}</td>
                                                <td>
                                                   <button className='btn btn-warning text-white' data-bs-toggle="modal" data-bs-target={`#exampleModal${item._id}`} onClick={() => {
                                                      setUpdateName(item.name)
                                                      setUpdateCountry(item.country)
                                                   }} >
                                                      <i className='fas fa-edit'></i>
                                                   </button>

                                                   <div className="modal fade" id={`exampleModal${item._id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                      <div className="modal-dialog">
                                                         <div className="modal-content">
                                                            <div className="modal-header">
                                                               <h5 className="modal-title" id="exampleModalLabel">Update Airport</h5>
                                                               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                               <form>
                                                                  <div className='mb-3'>
                                                                     <input type="country" className='form-control' placeholder='Country airport' value={updateCountry} onChange={e => setUpdateCountry(e.target.value)} />
                                                                  </div>
                                                                  <div className='mb-3'>
                                                                     <input type="text" className='form-control' placeholder='Name' value={updateName} onChange={e => setUpdateName(e.target.value)}  />
                                                                  </div>
                                                                  <div className='mb-3'>
                                                                     <button className='btn btn-success d-block' onClick={(e) => {
                                                                        updateAirport(e, item._id)
                                                                     }}>
                                                                        <i className='fas fa-save'></i> Save
                                                                     </button>
                                                                  </div>
                                                               </form>
                                                            </div>
                                                            <div className="modal-footer">
                                                               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </td>
                                                <td>
                                                   <button className='btn btn-danger mr-2' onClick={(e) => {
                                                      deleteAirport(e, item._id)
                                                   }}>
                                                      <i className='fas fa-trash'></i>
                                                   </button>
                                                </td>
                                             </tr>
                                          ))}  
                                       </> 
                                    ): (
                                       <>
                                          {data.map((item, index) => (
                                          <tr key={index}>
                                             <td>{index + 1}</td>
                                             <td>{item.name}</td>
                                             <td>{item.country}</td>
                                             <td>
                                                <button className='btn btn-warning text-white' data-bs-toggle="modal" data-bs-target={`#exampleModal${item._id}`} onClick={() => {
                                                   setUpdateName(item.name)
                                                   setUpdateCountry(item.country)
                                                }} >
                                                   <i className='fas fa-edit'></i>
                                                </button>

                                                <div className="modal fade" id={`exampleModal${item._id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                   <div className="modal-dialog">
                                                      <div className="modal-content">
                                                         <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Update Airport</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                         </div>
                                                         <div className="modal-body">
                                                            <form>
                                                               <div className='mb-3'>
                                                                  <input type="country" className='form-control' placeholder='country' value={updateCountry} onChange={e => setUpdateCountry(e.target.value)} />
                                                               </div>
                                                               <div className='mb-3'>
                                                                  <input type="text" className='form-control' placeholder='name' value={updateName} onChange={e => setUpdateName(e.target.value)}  />
                                                               </div>
                                                               <div className='mb-3'>
                                                                  <button className='btn btn-success d-block' onClick={(e) => {
                                                                     updateAirport(e, item._id)
                                                                  }}>
                                                                     <i className='fas fa-save'></i> Save
                                                                  </button>
                                                               </div>
                                                            </form>
                                                         </div>
                                                         <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </td>
                                             <td>
                                                <button className='btn btn-danger mr-2' onClick={(e) => {
                                                   deleteAirport(e, item._id)
                                                }}>
                                                   <i className='fas fa-trash'></i>
                                                </button>
                                             </td>
                                          </tr>
                                       ))} 
                                       </> 
                                    )}
                                 </tbody>
                              </table>
                           ): (
                           <div className='alert alert-danger fw-bold text-center'>No data</div>      
                           )}
                        </div>
                     ): (
                        <div>{<Loading/>}</div>
                     )}
                  </div>
               </div>
            </div>
         </main>
      </div>
   )
}

export default Airport