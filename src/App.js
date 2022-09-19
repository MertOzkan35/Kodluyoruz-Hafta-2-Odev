import "./App.css";
import CategorySide from "./Components/CategorySide/CategorySide";
import ToDoSide from "./Components/ToDoSide/ToDoSide";

function App() {
  return (
    <div className=" flex grid-cols-2  w-full h-screen bg-[#e5e7eb]">
      <CategorySide />
      <ToDoSide />
    </div>
  );
}

export default App;
