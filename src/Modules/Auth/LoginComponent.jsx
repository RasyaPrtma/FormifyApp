import { useState } from "react";
import { UseAuth } from "../Context/AuthContext";

export default function LoginComponent(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const {doLogin} = UseAuth()

    const handleClick = () => {
        doLogin(email,password);
    }

    return(
        <>
            <div className="container-login">
                <h1>Login</h1>
                <div className="section-login">
                    <div className="wrapper-input">
                        <label htmlFor="email">Email</label>
                        <input value={email} type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="wrapper-input">
                        <label htmlFor="password">Password</label>
                        <input value={password} type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button onClick={handleClick}>Submit</button>
                </div>
            </div>
        </>
    );
}