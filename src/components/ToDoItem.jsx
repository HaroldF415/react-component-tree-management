import React from "react";

function ToDoItem(props) {
  // const [clicked, setClicked] = useState(false);

  // function isClicked() {
  //   setClicked(prev => {
  //     return !prev;
  //   });
  // }

  return (
    <li
      // onClick={isClicked}
      // style={{ textDecoration: clicked ? "line-through" : "none" }}
      onClick={() => {
        // This function will only get called until a click is detected
        props.onChecked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
