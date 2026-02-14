import NavBar from "./NavBar";
import AddTask from "./AddTask";



function App(){
  return (
    <>
      <NavBar heading="To-Do List App"/>
      <AddTask inputText="Add New Task" BtnContent="Add Task"/>
      {/* <TaskBar>
        
        <Tasks value="eat"/>
        
          
      </TaskBar> */}
      
    </>
  );
}

export default App;