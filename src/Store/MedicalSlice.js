import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  innerWidth: 0,
  skills: [
    { id: 1, name: "Exprerience Dentist", percentage: 80 },
    { id: 2, name: "Modern Equipment", percentage: 65 },
    { id: 3, name: "Friendly Staff", percentage: 85 },
  ],
};

const MedicalSlice = createSlice({
  name: "medical",
  initialState,
  reducers: {
    changeInnerWidth: (state, action) => {
      state.innerWidth = action.payload;
    },
  },
});

export const { changeInnerWidth } = MedicalSlice.actions;
export default MedicalSlice.reducer;
