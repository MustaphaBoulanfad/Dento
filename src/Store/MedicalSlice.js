import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  innerWidth: 0,
  skills: [
    { id: 1, name: "Exprerience Dentist", percentage: 80 },
    { id: 2, name: "Modern Equipment", percentage: 65 },
    { id: 3, name: "Friendly Staff", percentage: 85 },
  ],
  pricing: [
    {
      id: 1,
      name: "Teeth Whitening Service at home",
      stage: "1 times",
      price: 115.0,
    },
    {
      id: 2,
      name: "Teeth Whitening Service at Dental Clinic",
      stage: "1 times",
      price: 100.0,
    },
    {
      id: 3,
      name: "Ceramic crowns and fillings Dental porcelain",
      stage: "1 times",
      price: 99.0,
    },
    {
      id: 4,
      name: "Remove crowns, bridges Service",
      stage: "1 tooth",
      price: 50.0,
    },
    {
      id: 5,
      name: "Covering the recession of the gums",
      stage: "1 times",
      price: 400.0,
    },
    {
      id: 6,
      name: "Consultation, impressions and preparation of models",
      stage: "1 times",
      price: 35.0,
    },
    {
      id: 7,
      name: "Removal of an old inlay, old crown",
      stage: "1 times",
      price: 99.0,
    },
    {
      id: 8,
      name: "Overlay teeth whitening ( 2 arches)",
      stage: "1 times",
      price: 170.0,
    },
    {
      id: 9,
      name: "Standard porcelain and zirconium crown on implant",
      stage: "1 tooth",
      price: 499.0,
    },
    {
      id: 10,
      name: "Implantation of an implant (price depends on system used)",
      stage: "1 tooth",
      price: 600.0,
    },
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
