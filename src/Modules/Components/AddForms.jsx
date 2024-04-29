import { useState } from "react";
import { UseForms } from "../Context/FormsContext";
import { UseAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";

export default function AddForms(){
    const [name,setName] = useState("");
    const [slug,setSlug] = useState("");
    const [description,setDescription] = useState("");
    const [domain,setDomain] = useState("");
    const [limit,setLimit] = useState(false);

    const  {AddForms} = UseForms();
    const {Token} = UseAuth();

    function handleClear(){
        setName("");
        setSlug("");
        setDescription("");
        setDomain("");
        setLimit("");
    }

    const handleClick = () => {
        const allowed_domain = domain.split('\n');
        const filter_domain = [];
        allowed_domain.forEach((val) => {
            if(val.split('.')[1] === 'id' || val.split('.')[1] === 'org' || val.split('.')[1] === 'com'|| (val.split('.')[1] === 'my' && val.split('.')[2] === 'id') || val.split('.')[1] === 'biz') return filter_domain.push(val);
        });
        AddForms(name,slug,description,limit,filter_domain,Token,handleClear);
    }

    return(
        <>
         <div className="create-forms">
            <Link className="link" to={"/"}>Show Forms?</Link>
        </div>
           <div className="container-forms">
                <h2>Create Forms</h2>
                <div className="section-forms">
                    <div className="wrapper-input">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className="wrapper-input">
                        <label htmlFor="slug">Slug</label>
                        <input type="text" name="slug"/>
                    </div>
                    <div className="wrapper-input">
                        <label htmlFor="description">Description</label>
                        <textarea rows={5} name="description"/>
                    </div>
                    <div className="wrapper-input">
                        <label htmlFor="domain">Allowed Domain</label>
                        <textarea rows={5} name="domain"/>
                    </div>
                    <div className="wrapper-input checkbox">
                        <label htmlFor="limit_one_response">Limit One Response</label>
                        <input type="checkbox" name="limit_one_response"/>
                    </div>
                    <button onClick={handleClick}>Create Forms</button>
                </div>
            </div>
        </>
    );
}