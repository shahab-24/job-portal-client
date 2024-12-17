import axios from "axios";
import { useContext, useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
	baseURL:"http://localhost:3000",
	withCredentials: true
})

const useAxiosSecure = () => {
	const {signOutUser} = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		axiosInstance.interceptors.response.use(response=> {
			return response
		},error => {
			if(error.status === 401 || error.status === 403){
				signOutUser()
				.then(() => {console.log("log out from useAxios")
					navigate('/login')
				})
				.catch(error => console.log(error.message))
				
			}
			return Promise.reject(error)
		})
	},[])
	return axiosInstance;
};

export default useAxiosSecure;