/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"
import { ApiAddForms, ApiFetchDetailForms, ApiFetchForms } from "../Api/RestApi";
import Swal from "sweetalert2";

const InitContext = {
    AddForms: () => {},
    GetForms: () => {},
    GetDetailForms: () => {},
    Array: [],
    singleData: undefined
}

const FormsContext = createContext(InitContext);

export const UseForms = () => {
    return useContext(FormsContext);
}

export const FormsProvider = ({children}) => {

    const [Array,setArray] = useState();
    const [singleData,setSingleData] = useState();

    const AddForms = async (name,slug,description,limit_one_response,allowed_domain,Token,clear) => {
        const api = await ApiAddForms(name,slug,description,limit_one_response,allowed_domain,Token);
        Swal.fire({
        title:"Apakah Ingin Menambah Form?",
        icon:"question",
        showCancelButton:true,
       }).then((response) => {
        if(response.isConfirmed){
               if(api.status === 200){
                Swal.fire({
                    title: api.data.message,
                    icon:"success",
                    showConfirmButton:false,
                    timer:2000,
                });
                return clear();
               }
               const  {name = [], allowed_domain = [], slug = []} = api.data;
               const arr = [...name,...allowed_domain,...slug];
               let error = arr.join('\n');
               return Swal.fire({
                title:"Gagal Membuat Forms",
                text: error,
                showConfirmButton:false,
                timer:3000
               })
            }
       })
    }

    const GetForms = async (Token) => {
        const api = await ApiFetchForms(Token);
        const data = setArray(api.data.forms);
        return data
    }

    const GetDetailForms = async (forms_slug,Token) => {
        const api = await ApiFetchDetailForms(forms_slug,Token);
        if(api.status === 200){
            const data = setSingleData(api.data.form);
            return data;
        }else{
        return Swal.fire({
            title:"TIdak Dapat Mengambil Data!",
            text:api.data.message,
            icon:"warning",
            showConfirmButton:false,
            timer:4000
        })
    }
    }

    return(
        <>
            <FormsContext.Provider value={{AddForms,GetForms,GetDetailForms,Array,singleData}}>
                {children}
            </FormsContext.Provider>
        </>
    );
}