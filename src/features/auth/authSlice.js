import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        is_authenticated: false,
        username: '',
    },
    reducers: {
        authenticate: (state, action) => {
            state.username = action.payload
            state.is_authenticated = true
        },
        
        logout: state => {
            state.username = ""
            state.is_authenticated = false
        }
    }
})

export const { authenticate, logout } = authSlice.actions
export default authSlice.reducer
