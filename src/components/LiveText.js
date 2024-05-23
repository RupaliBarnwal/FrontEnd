import React, { useState } from "react";

function LiveText() {
  const [info, setinfo] = useState("");
  const handleonclick = (e) => {
    setinfo(e.target.value);
  };
  return (
    <div>
      <input type="text" value={info} onChange={handleonclick} />
      <p>{info}</p>
    </div>
  );
}

export default LiveText;
