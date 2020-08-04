import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  // To DELETE an ITEM in the ITEMS array we will use the FILTER method
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  // This will change our ITEMS array by filtering through all of our PREV items and return the ITEMS that don't match the ID of the ITEM we want to delete.
  // Finally we will RETURN an array
  function deleteItem(id) {
    setItems(prev => {
      // The filter function takes in a function
      // Inside that function we have access to the element being looped through and the index of that item
      return prev.filter((item, index) => {
        // return an array with all the items where the index is not EQUAL to the ID passed over
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
