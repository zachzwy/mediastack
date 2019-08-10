import React, { createRef } from "react";

const AddMedia = ({ handleAdd }: { handleAdd: Function }) => {
  const myRef = createRef<HTMLInputElement>();
  return (
    <div className="add-media">
      <form
        onSubmit={e => {
          handleAdd(myRef.current!.value);
          e.preventDefault();
          myRef.current!.value = "";
        }}
      >
        <input type="text" ref={myRef} className="input-box" />
        <input type="submit" value="Add" className="input-button" />
      </form>
    </div>
  );
};

export default AddMedia;
