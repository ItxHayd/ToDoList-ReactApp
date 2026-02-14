import { useState } from "react";
import Tasks from "./tasks";
import TaskBar from "./TaskBar";

interface Props{
    inputText: string,
    BtnContent: string,
}



function AddTask({inputText,BtnContent}:Props){
    const InputBox = document.querySelector("input");
    const [taskValue,setTaskValue]=useState("");
    const [taskList,setTaskList]=useState<string[]>([]);
    
    

    const HandleAddTask = () => {
        if (taskValue.trim() === "") return;
        setTaskList([...taskList, taskValue]);
        setTaskValue("");
        InputBox!.value = "";
       
    }
    
    const Delete = () => { InputBox!.value = ""; }
    return (
        <>
        <div className="w-2/3 flex justify-center content-center mx-auto mt-3 realtive">
            <div className="flex flex-1 relative">
                <input onChange={(e)=>{setTaskValue(e.target.value)}} type="text" className="bg-gray-600 p-2 w-full absolute rounded-md font-semibold mr-1" placeholder={inputText}/>
                <img src="src\assets\cross.svg" onClick={Delete} className="cursor-pointer h-11 flex z-2 absolute right-0 active:scale-110" id="deleteBtn"/>
            </div>
            <button id="AddTaskBtn" onClick={HandleAddTask} className="cursor-pointer bg-red-500 font-semibold  rounded-md active:scale-105 active:bg-emerald-500 p-2 transition duration-100">{BtnContent}</button>

        </div>

        <TaskBar>
            {taskList.map((task, index) => (
                <Tasks key={index} value={task} />
            ))}
        </TaskBar>

        </>
        
  )
}

export default AddTask