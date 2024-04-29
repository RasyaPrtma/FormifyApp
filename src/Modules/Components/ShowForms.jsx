/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { UseAuth } from "../Context/AuthContext";
import { UseForms } from "../Context/FormsContext";
import { Link } from "react-router-dom";

export default function ShowForms() {
  const { GetForms, Array } = UseForms();
  const { Token } = UseAuth();

  useEffect(() => {
    GetForms(Token);
  }, [Token]);

  return (
    <>
     <div className="create-forms">
            <Link className="link" to={"/forms-add"}>Create Forms?</Link>
        </div>
      <div className="section-show">
        {Array !== undefined ? (
          Array.map((data) => (
            <Link
              className="link"
              key={data.id}
              to={{ pathname: "/single-forms", search: `?slug=${data.slug}` }}
            >
              <ul className="data">
                <li>Name: {data.name}</li>
                <li>Slug: {data.slug}</li>
                <li>Description: {data.description}</li>
              </ul>
            </Link>
          ))
        ) : (
          <h1>Data Kosong!</h1>
        )}
      </div>
    </>
  );
}
