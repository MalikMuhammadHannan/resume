import React, { useState } from "react";
import "./Todo.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItem] = useState([]);
  const addItem = () => {
    setItem([...items, inputData]);
    setInputData("");
  };
  const deleter = (id) => {
    const update = items.filter((data, ind) => {
      return ind !== id;
    });
    setItem(update);
  };
  return (
    <>
      <div className="center">
        <div>
          <h1>Todo</h1>
        </div>
        <div className="inpuT">
          <input
            type="text"
            onChange={(e) => {
              setInputData(e.target.value);
            }}
            value={inputData}
            placeholder="Add Item..."
            aria-required
          />
          <Button className="btn" type="submit" onClick={addItem} title="Add">
            <AddIcon />
          </Button>
        </div>
        {items.map((data, ind) => {
          return (
            <div key={ind}>
              <div className="flex">
                <h3>{data}</h3>

                <Button onClick={() => deleter(ind)}>
                  <DeleteForeverIcon />
                </Button>
              </div>
            </div>
          );
        })}
        <Button
          onClick={() => {
            setItem([]);
          }}
          className="btn"
        >
          Clear List
        </Button>
      </div>
    </>
  );
};

export default Todo;
