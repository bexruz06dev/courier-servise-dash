import axios from "axios";

const token = localStorage.getItem("token");

export const airportApi = {
   getAll: () => axios.get(
      "http://nurmuhammad.narzullayev.uz/api/v1/airport",
      {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         }
      }
   ),
   getOne: (id) => axios.get(
      `http://nurmuhammad.narzullayev.uz/api/v1/airport${id}`,
      {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         }
      }
   ),
   create: (params) => axios.post(
      "http://nurmuhammad.narzullayev.uz/api/v1/airport",
      params,
      {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         }
      }
   ),
   update: (id, params) => axios.put(
      `http://nurmuhammad.narzullayev.uz/api/v1/airport/${id}`,
      params,
      {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         }
      }
   ),
   delete: (id) => axios.delete(
      `http://nurmuhammad.narzullayev.uz/api/v1/airport/${id}`,
      {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         }
      }
   )
};