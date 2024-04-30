/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { UseForms } from "../Context/FormsContext";
import { UseAuth } from "../Context/AuthContext";
import InputChoice from "../Questions/InputChoice";
import MultipleChoice from "../Questions/MultipleChoice";
import DropDown from "../Questions/DropDown";
import CheckBox from "../Questions/CheckBox";
import Paragraph from "../Questions/Paragraph";

export default function SingleForms() {
  const Location = window.location;     
  const SearchParams = new URLSearchParams(Location.search);
  const Params = SearchParams.get("slug");

  const [question,setQuestion] = useState([]);

  const { GetDetailForms, singleData } = UseForms();
  const { Token } = UseAuth();

  const type = useRef();

  const handleAddQuestion = () => {
    if(question.length > 0){
       question.forEach((data) => {
        let newId = data.id + 1;
        return setQuestion([...question,{id:newId,type:type.current.value,config:""}]);
       })
    }else if(question.length === 0){
        return setQuestion([...question,{id:0,type:type.current.value,config:""}]);
    }
  }

  useEffect(() => {
    GetDetailForms(Params, Token);
  }, [Params]);

  console.log(question  )

  return (
    <>
      {singleData !== undefined ? (
        <div className="container-forms">
          <div>
            <h1>{singleData.name}</h1>
            <p>{singleData.description}</p>
          </div>
          <div className="question-add">
            <button onClick={handleAddQuestion}>Add Question</button>
            <select ref={type}>
                <option value="text">Short answer</option>
                <option value="paragraph">Paragraph</option>
                <option value="multiple choice">Multiple Choice</option>
                <option value="date">Date</option>
                <option value="dropdown">Dropdown</option>
                <option value="checkboxes">Checkbox</option>
            </select>
          </div>
          <div className="question-wrap">
            {
                question.map((data) => {
                    if(data.type === 'multiple choice'){
                        return <MultipleChoice key={data.id}/>
                    }else if(data.type === 'dropdown'){
                        return <DropDown key={data.id}/>
                    }else if(data.type === 'checkboxes'){
                        return <CheckBox key={data.id}/>
                    }else if(data.type === 'paragraph'){
                        return <Paragraph key={data.id}/>
                    }
                    else{
                        return <InputChoice type={data.type} key={data.id}/>
                    }
                })
            }
          </div>
        </div>
      ) : (
        <h1>Forbidden Access !</h1>
      )}
    </>
  );
}
