import axios from 'axios';
export const getUserFromLocalStorage = () =>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(!user){
        return null
    }else{
        const {token, role} = user
        return {token, role};
    }
}
export const setUserToLocalStorage = (token,role) =>{
    const userData = localStorage.setItem("user",JSON.stringify({token,role}))
}
export const removeUserFromLocalStorage = () =>{
    localStorage.removeItem("user")
}



