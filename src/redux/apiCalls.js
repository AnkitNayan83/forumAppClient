import { publicRequest } from "../axiosinstance";
import {
   loginFaliure,
   loginStart,
   loginSuccess,
   registerFaliure,
   registerStart,
   registerSuccess,
} from "./userSlice";

export const login = async (dispatch, userDetails) => {
   dispatch(loginStart());
   try {
      const res = await publicRequest.post("/auth/login", userDetails);
      dispatch(loginSuccess(res.data));
   } catch (error) {
      dispatch(loginFaliure());
   }
};

export const register = async (dispatch, userDetails) => {
   dispatch(registerStart());
   try {
      const res = await publicRequest.post("/auth/register", userDetails);
      dispatch(registerSuccess(res.data));
   } catch (error) {
      dispatch(registerFaliure());
   }
};
