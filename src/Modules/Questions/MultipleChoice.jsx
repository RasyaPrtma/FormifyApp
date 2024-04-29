import { useState } from "react";

export default function MultipleChoice(){
    const data = [
        {
          inputId: 1,
          value: "Masukkan Judul",
        },
      ];
    
      const [labelData,setLabelData] = useState(data);
    
      const onChangeInput = (e,id) => {
        const {name,value} = e.target;
        const editLabel = labelData.map((val) =>
            val.inputId === id && name ? {...val,[name]:value} : val
        );
    
        setLabelData(editLabel);
      }
    
      return (
        <>
          {labelData.map(({inputId,value}) => (
            <div key={inputId} className="question">
              <input className="label" type="text" name="value" value={value} onChange={(e) => onChangeInput(e,inputId)}></input>
              <input type="radio"/>
            </div>
          ))}
        </>
      );
}