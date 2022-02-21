import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './AppLayout/AppLayout'
import { Dashboard } from './pages/Dashboard'
import Login from './pages/Login'
import 'react-toastify/dist/ReactToastify.css';
import Client from './pages/Client'
import Airport from './pages/Airport'
import Warehouses from './pages/Warehouses'
import  Orders  from './pages/Orders'
import Admin from './pages/Admin'
import Flights from './pages/Flights'




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='' element={<AppLayout/>} />
        <Route element={<AppLayout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='clients' element={<Client/>} />
          <Route path='airports' element={<Airport/>} />
          <Route path='warehouse' element={<Warehouses/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='admin' element={<Admin/>}/>
          <Route path='flights' element={<Flights/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
