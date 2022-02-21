import axios from "axios";

const token = localStorage.getItem("token");

export const adminApi = {
   create: (params) => axios.post(
      "http://nurmuhammad.narzullayev.uz/api/v1/auth/register",
      params,
      {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         }
      }
   ),
};