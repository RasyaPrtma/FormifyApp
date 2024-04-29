import { useRef, useState } from "react";

export default function DropDown() {
  const data = [
    {
      inputId: 1,
      value: "Masukkan Judul",
    },
  ];

  const [quest, setQuest] = useState(data);
  const [opt, setOpt] = useState([]);
  const [value, setValue] = useState("");

  const onChangeInput = (e, id) => {
    const { name, value } = e.target;
    const editLabel = quest.map((val) =>
      val.inputId === id && name && value.length < 20
        ? { ...val, [name]: value }
        : val
    );
    setQuest(editLabel);
  };

  const handleAdd = () => {
    if (value !== "") {
      if (opt.length > 0) {
        opt.forEach((data) => {
          let num = data.id + 1;
          return setOpt([...opt, { id: num, name: value, value: value }]);
        });
      } else {
        return setOpt([...opt, { id: 0, name: value, value: value }]);
      }
    } else {
      return alert("Kosong!");
    }
  };

  return (
    <>
      <div className="question">
        <div className="wrap">
          <input
            className="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="value"
          />
          <button onClick={handleAdd}>Add Value</button>
        </div>
        {quest.map(({ inputId, value }) => (
          <div className="drop" key={inputId}>
            <input
              className="label"
              type="text"
              name="value"
              value={value}
              onChange={(e) => onChangeInput(e, inputId)}
            ></input>
            <select>
              {opt.map((val) => (
                <option key={val.id} value={val.value}>
                  {val.name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </>
  );
}
