import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name:"",
    email:"",
    photo:"",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    //El reducer lo que hace en este casos es guardar toda la informacion del usuario cuadno se loguea.
    reducers:{
        setUserLoginDetails :(state,action)=> {
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.photo=action.payload.photo;
        },
    //Aca estariamos seteando la info del usuario cuando hace el logOut
    setSignOutState: (state)=> {
        state.name = null;
        state.email= null;
        state.photo= null;
    }
    },
});

//Aca estamos poniendo a disposicion toda la informaciond de los usuarios al resto de la app
export const {setUserLoginDetails,setSignOutState}= userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;