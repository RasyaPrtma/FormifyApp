import { useState } from "react";

export default function CheckBox() {
  const data = [
    {
      inputId: 1,
      value: "Masukkan Judul",
    },
  ];

  const [quest, setQuest] = useState(data);

  const onChangeInput = (e, id) => {
    const { name, value } = e.target;
    const editLabel = quest.map((val) =>
      val.inputId === id && name ? { ...val, [name]: value } : val
    );

    setQuest(editLabel);
  };

  const handleAdd = () => {
    quest.forEach((val) => {
      let num = val.inputId + 1;
      return setQuest([...quest, { inputId: num, value: "Masukkan Judul" }]);
    });
  };

  return (
    <>
      <div className="question">
        <button onClick={handleAdd}>Add Value</button>
        {quest.map(({ inputId, value }) => (
          <div key={inputId} className="box">
            <input type="checkbox" />
            <input
              className="label"
              type="text"
              name="value"
              value={value}
              onChange={(e) => onChangeInput(e, inputId)}
            ></input>
          </div>
        ))}
      </div>
    </>
  );
}
