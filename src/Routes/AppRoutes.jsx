import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "../Style/App.css";
import LoginComponent from "../Modules/Auth/LoginComponent";
import { UseAuth } from "../Modules/Context/AuthContext";
import AddForms from "../Modules/Components/AddForms";
import { FormsProvider } from "../Modules/Context/FormsContext";
import ShowForms from "../Modules/Components/ShowForms";
import FormsLayout from "../Layouts/FormsLayout";
import SingleForms from "../Modules/Components/SingleForms";

function AppRoutes() {
  const { isLoggin } = UseAuth();

  return (
    <>
      <BrowserRouter>
        <Routes>
          {isLoggin ? (
            <Route
              element={
                <FormsProvider>
                  <FormsLayout />
                </FormsProvider>
              }
            >
              <Route path="/forms-add" element={<AddForms />} />
              <Route path="/" element={<ShowForms />} />
              <Route path="/single-forms" element={<SingleForms />} />
              <Route path="*" element={<Navigate to={"/"} />} />
            </Route>
          ) : (
            <Route>
              <Route path="/" element={<LoginComponent />} />
              <Route path="*" element={<Navigate to={"/"}/>}/>
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
