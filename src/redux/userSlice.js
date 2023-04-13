const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
   name: "User",
   initialState: {
      currentUser: JSON.parse(localStorage.getItem("user")) || null,
      loading: false,
      error: false,
   },

   reducers: {
      loginStart: (state) => {
         state.loading = true;
         state.error = false;
      },
      loginSuccess: (state, action) => {
         state.currentUser = action.payload;
         state.loading = false;
         state.error = false;
      },
      loginFaliure: (state) => {
         state.loading = false;
         state.error = true;
      },
      registerStart: (state) => {
         state.loading = true;
         state.error = false;
      },
      registerSuccess: (state, action) => {
         state.currentUser = action.payload;
         state.loading = false;
         state.error = false;
      },
      registerFaliure: (state) => {
         state.loading = false;
         state.error = true;
      },
      logOut: (state) => {
         state.currentUser = null;
      },
   },
});

// exporting actions

export const {
   loginStart,
   loginSuccess,
   loginFaliure,
   registerStart,
   registerSuccess,
   registerFaliure,
   logOut,
} = userSlice.actions;

// exporting reducer

export default userSlice.reducer;
