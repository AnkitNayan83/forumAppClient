import { redirect } from "react-router-dom";
import { publicRequest } from "../axiosinstance";
import {
   loginFaliure,
   loginStart,
   loginSuccess,
   registerFaliure,
   registerStart,
   registerSuccess,
   updateUserSuccess,
   updateUserStart,
   updateUserFaliure,
} from "./userSlice";

const config = {
   headers: {
      "Content-Type": "application/json",
   },
   withCredentials: true,
};

export const login = async (dispatch, userDetails) => {
   dispatch(loginStart());
   try {
      const res = await publicRequest.post("/auth/login", userDetails, config);
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(loginSuccess(res.data));
      redirect("/");
   } catch (error) {
      dispatch(loginFaliure());
   }
};

export const register = async (dispatch, userDetails) => {
   dispatch(registerStart());
   try {
      const res = await publicRequest.post("/auth/register", userDetails);
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(registerSuccess());
   } catch (error) {
      dispatch(registerFaliure());
   }
};

export const updateUser = async (dispatch, userDetails, id) => {
   dispatch(updateUserStart());
   try {
      const res = await publicRequest.put(`/users/${id}`, userDetails, {
         withCredentials: true,
      });
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(updateUserSuccess());
   } catch (error) {
      dispatch(updateUserFaliure());
   }
};
