import React, { useState } from "react";
import Welcome from "./Welcome";
import { useSelector } from "react-redux";
import { getAllByDisplayValue } from "@testing-library/react";

function ToDoSide() {
  const category = useSelector((state) => state.mert.categories);
  // storeden category datayı çektiğimiz kısım
  //  ---------State kısmı ------------
  const [dataa, setdataa] = useState("Home");
  const [task, settask] = useState(" ");
  const [addtask, setaddtask] = useState([
    {
      task: "TASKS...",
      categorys: "",
      id: Math.floor(Math.random() * 101),
      checked: false,
    },
  ]);
  // ---------State kısmı ------------
  const handleChange = (event) => {
    setdataa(event);
    // select değiştikçe değeri statete atan kısım
  };
  const NewTask = (task) => {
    settask(task);
    // input içine yazılın taski state atan kısım
  };

  function Add() {
    setaddtask([
      ...addtask,
      {
        task: task,
        categorys: dataa,
        id: Math.floor(Math.random() * 101),
        checked: false,
      },
      // addtask datasını diğer stateler ile doldurduğumuz alan
    ]);
    settask("");
  }

  function Line(value, el) {
    const index = addtask.findIndex((x) => x.id === el.id);
    addtask[index].checked = value;
    setaddtask([...addtask]);
    // id leri eşit olan objeleriin indexini bulup valueden gelen true yada falsa eşitledik
    // true olanların üstüne çizgi getAllByDisplayValue. burda mutasyon uyguladık setaddtask([...addtask]); diyerek.
  }

  function Delete(el) {
    const Newaddtask = addtask.filter((x) => x.id !== el.id);
    //  task silmek için
    setaddtask(Newaddtask);
  }

  return (
    <div className="flex flex-col items-start justify-start  m-8 w-full">
      <Welcome />
      <div className=" flex flex-row py-2  mt-10 ml-6 w-4/5 h-24">
        <input
          onChange={(e) => NewTask(e.target.value)}
          value={task}
          placeholder="write a new task"
          className=" w-3/4 h-12 rounded-xl bg-[#d9d9d9] p-4"
        />
        <select
          onChange={(event) => handleChange(event.target.value)}
          className="bg-[#d9d9d9] flex items-center mx-2  justify-center w-1/6 h-12 rounded-xl font-semibold "
          name="cars"
          id="cars"
        >
          {category.map((value, key) => {
            return (
              <option key={key} value={value.Category}>
                {value.Category}
              </option>
            );
          })}
        </select>
        <button
          onClick={() => Add()}
          className="flex flex-row justify-center items-center bg-[#d9d9d9] font-semibold w-[6rem] h-12  rounded-xl"
        >
          <img className="w-3 h-3  " src={require("../İmages/plus.png")} />
          Add
        </button>
      </div>
      <div>
        {addtask.map((el, index) => {
          return (
            <div
              key={index}
              className=" flex justify-between w-[36rem] h-12 rounded-xl m-2 bg-[#d9d9d9] ml-6 p-4 font-semibold "
            >
              <div className="flex  justify-start items-center m-1">
                <input
                  className="m-2"
                  type="checkbox"
                  onClick={(value) => Line(value.target.checked, el)}
                />
                <p
                  className={` ${
                    el.checked ? "line-through" : "no-underline"
                  } `}
                >
                  {el.task}
                </p>
              </div>
              <div className="flex   justify-start items-center m-1">
                <p className=" font-semibold">({el.categorys})</p>
                <button
                  onClick={() => Delete(el)}
                  className="w-24 h-8 ml-2 rounded-2xl bg-[#808186] "
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToDoSide;
