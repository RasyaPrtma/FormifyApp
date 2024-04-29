import axios from "axios"
import { HTTP } from "./HTTP";

export const ApiLogin =  async(email,password) => {
    const api = await axios.post(HTTP + 'auth/login',{
        email:email,
        password:password
    })
    .then((res) => {
        return res;
    })
    .catch((err) => {
        return err.response;
    });
    return api;
}

export const ApiLogout = async(token) =>{
    const api = await axios.post(HTTP + 'auth/logout',{},{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => {
        return res;
    })
    .catch((err) => {
        return err.response;
    })
    return api;
}

export const ApiAddForms = async(name,slug,description,limit_one_response,allowed_domain,Token) => {
    const api = await axios.post(HTTP + 'forms',{
        name:name,
        slug:slug,
        description:description,
        limit_one_response:limit_one_response,
        allowed_domains:allowed_domain
    },{
        headers:{
            Authorization: `Bearer ${Token}`
        }
    })
    .then((res) => {
        return res;
    })
    .catch((err) => {
        return err.response;
    })
    return api;
}

export const ApiFetchForms = async(Token) => {
    const api = await axios.get(HTTP + 'forms',{
        headers:{
            Authorization:`Bearer ${Token}`
        }
    })
    .then((res) => {
        return res;
    })
    .catch((err) => {
        return err.response
    })
    return api;
}

export const ApiFetchDetailForms = async(forms_slug,Token) => {
    const api = await axios.get(HTTP + 'forms/' + forms_slug,{
        headers:{
            Authorization:`Bearer ${Token}`
        }
    })
    .then((res) => {
        return res;
    })
    .catch((err) => {
        return err.response
    })
    return api;
}