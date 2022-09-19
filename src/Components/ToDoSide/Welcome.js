import React from "react";

function Welcome() {
  const current = new Date();
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;
  return (
    <div className="flex flex-col justify-center items-center font-semibold  w-full rounded-2xl p-2 bg-white border-2 h-32 text-xl ">
      <h1>Welcome to To Do Lİst</h1>
      <img
        className="w-10 h-10 pt-2 "
        src={require("../İmages/to-do-list.png")}
      />
      <h1 className=" w-full text-base text.opacity-50 flex items-end justify-end">
        Today : {date}
      </h1>
    </div>
  );
}

export default Welcome;
