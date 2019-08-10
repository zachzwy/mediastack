import React, { createRef } from "react";

const AddMedia = ({ handleAdd }: { handleAdd: Function }) => {
  const myRef = createRef<HTMLInputElement>();
  return (
    <div className="add-media">
      <input type="text" ref={myRef} />
      <button onClick={() => handleAdd(myRef.current!.value)}>Add</button>
    </div>
  );
};

export default AddMedia;
