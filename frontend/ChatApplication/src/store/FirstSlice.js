import {createSlice} from '@reduxjs/toolkit'

const FirstSlice = createSlice({
    name : 'SignUp',
    initialState : {
        show : false,
    },
    reducers :{
        changeShow : (state)=>{
            state.show = true
        }
    }
})

export const {changeShow} = FirstSlice.actions ;
export default FirstSlice.reducer;