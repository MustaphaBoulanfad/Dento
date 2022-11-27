import { configureStore } from "@reduxjs/toolkit";
import medical from "./MedicalSlice";

export default configureStore({ reducer: medical });
