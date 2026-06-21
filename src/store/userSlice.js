import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUsers:(state,action)=>{
            return action.payload
        },
        removeUsers:(state,actions)=>{
            return action.payload
        }
    }
})

export const {addUsers,removeUsers}=userSlice.actions

export default userSlice.reducer