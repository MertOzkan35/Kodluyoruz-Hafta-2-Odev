import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCategory } from "../../store/slices/categorySlice";
// ekranın solunda bulunan alan burası açıklamalar alt satırlara yazıldı.
function Categorys() {
  const [categoryName, setCategoryName] = useState("");
  // category isimlerinin toplandığı alan bu state reduxa gidiyor
  const [hid, setHid] = useState("invisible");
  //  category create kısmını görünür kılıp gizlemek için kurulan state

  const categories = useSelector((state) => state.mert.categories);
  //  storedeki yapıyı categoriese eşitledik ardınadan bu categoriesi map ile döndürdük
  const dispatch = useDispatch();

  const ChangeHid = () => {
    setHid("visible");
  };

  const setName = (name) => {
    setCategoryName(name);
    //  category ismi statete atıldı.
  };

  function Add() {
    setHid("invisible");

    dispatch(addCategory({ Category: categoryName }));
    // reduxa burda gönderdik category isimlerini
    setCategoryName("");
  }

  const AddCategory = () => {
    return (
      <div
        className={`w-64 h-128 flex flex-col m-6 justify-center item-center ${hid} `}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Category Name..."
          className=" w-64 h-12 bg-[#ebecf0]  rounded-xl my-3 p-2"
          value={categoryName}
        />
        <button
          onClick={() => Add()}
          className="w-64 h-12 bg-[#ebecf0] border-2 rounded-xl font-bold "
        >
          Add
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-full m-9 justify-start items-center ">
      {categories.map((element, key) => {
        return (
          <div
            key={key}
            className="w-full h-12 bg-[#ebecf0] rounded-2xl my-2 flex items-center justify-center font-semibold "
          >
            <p> {element.Category} </p>
          </div>
        );
      })}

      <div className="w-full h-12 bg-[#808186] rounded-2xl m-4 flex items-center justify-center font-semibold ">
        <button
          onClick={ChangeHid}
          className="flex flex-row justify-center items-center "
        >
          <img className="w-4 h-4  " src={require("../İmages/plus.png")} />
          <p className="pl-2">Create New Category</p>
        </button>
      </div>
      {AddCategory()}
    </div>
  );
}

export default Categorys;
