import axios from "axios";
import { FormValues } from "../ts/interfaces/Form";

export const handleSubmit = async (values: FormValues) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/register`, values);

    localStorage.setItem('token', response?.data?.token);

    localStorage.setItem('userId', response?.data?.userId)
    
    window.location.href = '/';
  } catch (error) {
    console.error('Error with post request', error);
  }
};