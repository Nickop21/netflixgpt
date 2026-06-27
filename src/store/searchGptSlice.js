import { createSlice } from "@reduxjs/toolkit";

const searchGptSlice = createSlice({
  name: "searchGptSlice",
  initialState: {
    gptWindow: false,
    language:"english"
  },
  reducers: {
    isGptWindow: (state, action) => {
      state.gptWindow = !state.gptWindow;
    },
    selectedLanguage:(state,action)=>{
        state.language=action.payload
    }
  },
});


export const {isGptWindow,selectedLanguage}=searchGptSlice.actions
export default searchGptSlice.reducer