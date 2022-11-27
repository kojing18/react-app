import React, { useState } from "react";
import "bulma/css/bulma.css";

export const InputToDo = (props) => {
  // stateを作成
  const [text, setText] = useState("");

  //入力値にtextを反映
  const handleChange = (e) => setText(e.target.value);

  // Enter押下時、ToDoに追加
  const handlseEnter = (e) => {
    if (e.key === "Enter") {
      if (!text.match(/\S/g)) return;
      props.onAdd(text);
      setText("");
    }
  };

  return (
    <div className="panel-block">
      <input
        class="input"
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={handleChange}
        onKeyPress={handlseEnter}
      />
    </div>
  );
};

export default InputToDo;
