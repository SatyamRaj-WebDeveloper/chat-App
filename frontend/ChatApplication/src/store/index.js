import { configureStore } from "@reduxjs/toolkit";
import FirstSlice  from "./FirstSlice";
import SignUp from "../components/SignUp";

const store  = configureStore({
    reducer :{
        SignUp : FirstSlice,
    }
})

export default store