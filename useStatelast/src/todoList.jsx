import React ,{useState} from "react"
import './todoList.css'
function TodoList(){
     const[tasks,setTask]=useState(["Eat brakfast","take a shawer","go to work"]);
     const[newTask,SetNewTask]=useState("");
        function handleinput(event){
            SetNewTask(event.target.value);
        }
     
     function addtask(){
        if(newTask!==""){
            setTask(t=>[...tasks,newTask]) ;
            SetNewTask("");
        }
     
      }
      function handleDelete(index){
        const updatedTask=tasks.filter((Element,i)=>i!==index);
       setTask(updatedTask);
      }
      function handleUp(index){
        if(index<tasks.length-1){
            const updatedTAsk=[...tasks];
            [updatedTAsk[index],updatedTAsk[index-1]]=[updatedTAsk[index-1],updatedTAsk[index]];

            setTask(updatedTAsk);

        }

      }
      function handleDown(index){
        if(index<0){
            const updatedTAsk=[...tasks];
            [updatedTAsk[index],updatedTAsk[index+1]]=[updatedTAsk[index+1],updatedTAsk[index]];

            setTask(updatedTAsk);

        }


      }
   
   
    return(<div className="todo"> 
        <h1>To Do List</h1>
        <input type="text" placeholder="Enter a task.." value={newTask} onChange={handleinput}/>
        <button onClick={addtask} className="addBTN">Add</button>
       <ol>
       {tasks.map(( task,index)=><li key={index} >
        <span>{task}</span>
        <button onClick={()=>handleDelete(index)}  className="deleteBTN">
            Delete</button>
            <button onClick={()=>handleUp(index)} className="UPBTN">
             👍</button>
            <button onClick={()=>handleDown(index)} className="downBTN">
            👎</button>
       </li>)}
       </ol>
     
    </div>)
}


export default TodoList 