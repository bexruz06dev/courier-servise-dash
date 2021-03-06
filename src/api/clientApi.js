import axios from "axios";

const token = localStorage.getItem("token");

export const clientApi = {
   getAll: () => axios.get(
      "http://nurmuhammad.narzullayev.uz/api/v1/client",
      {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         }
      }
   ),
   getOne: (id) => axios.get(
      `http://nurmuhammad.narzullayev.uz/api/v1/client${id}`,
      {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         }
      }
   ),
   create: (params) => axios.post(
      "http://nurmuhammad.narzullayev.uz/api/v1/client",
      params,
      {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         }
      }
   ),
   update: (id, params) => axios.put(
      `http://nurmuhammad.narzullayev.uz/api/v1/client/${id}`,
      params,
      {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         }
      }
   ),
   delete: (id) => axios.delete(
      `http://nurmuhammad.narzullayev.uz/api/v1/client/${id}`,
      {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         }
      }
   )
}