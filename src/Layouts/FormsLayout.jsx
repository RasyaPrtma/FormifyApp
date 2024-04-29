import { Outlet } from "react-router-dom";

export default function FormsLayout(){
    return(
        <>
            <div className="main">
                <div className="heading">
            <h1>FORMIFY APP</h1>
            </div>
                <Outlet/>   
            </div>
        </>
    );
}