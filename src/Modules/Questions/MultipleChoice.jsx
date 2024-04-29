import { useState } from "react";

export default function MultipleChoice() {
  const data = [
    {
      inputId: 1,
      name:"Judul1",
      value: "Masukkan Judul",
    },
  ];

  const [quest,setQuest] = useState(data);

  const onChangeInput = (e, id) => {
    const { name, value } = e.target;
    const editLabel = quest.map((val) =>
      val.inputId === id && name && value.length < 20 ? { ...val, ["value"]: value } : val
    );
    setQuest(editLabel);
  };

  const handleAdd = () => {
    quest.forEach((data) => {
        let num = data.inputId + 1;
        setQuest([...quest,{inputId:num,name:`Judul${num}`,value:"Masukan Judul"}]);
    })
  }

  return (
    <>
    <div className="question">
    <button onClick={handleAdd}>Add Choice</button>
        {quest.map(({inputId,value,name}) => (
            <fieldset className="choices" key={inputId}>
                <input className="radio-value" type="radio" name="question" value={value} />
                <input
                  className="label radio"
                  type="text"
                  name={name}
                  value={value}
                  onChange={(e) => onChangeInput(e, inputId)}
                ></input>
            </fieldset>
        ))}
    </div>
      
    </>
  );
}
