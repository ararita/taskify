// function InputField() {
//   return <div></div>;
// }

// export default InputField;
import React from "react";
import "./styles.css";

const InputField = () => {
  return (
    <div>
      <form className="input" action="">
        <input type="text" placeholder="Enter a task" className="input__box" />
        <button type="submit" className="input__submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
