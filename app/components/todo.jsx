"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';
import { useTheme } from "../theme";

const Todo = () => {
    const inputRef = useRef(null);
  const [task, setTask] = useState([]);
  const [edit,setedit] = useState(false);
  const [editId,seteditId] = useState(null);
  useEffect(() => {
    console.log(task);
    console.log(uuidv4())
  }, [task]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus
  } = useForm();

  const onSubmit = (data) => {
    if(!edit)
    {
        setTask([...task, { id:uuidv4(),task: data.task, status: false }]);
        setValue("task",'')
    }
    else{
        setTask(task.map((ele) =>
                ele.id === editId ? { ...ele, task: data.task } : ele
            ));
            seteditId(null);
            setValue("task", '');
            setedit(false)

    }
    
  };

  const handleStatusChange = (id) => {
    setTask((prevTasks) =>
      prevTasks.map((task, index) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  const Handledelete=(id)=>{
    setedit(false)
    setTask(task.filter((ele,idx) => ele.id!==id))
  }

  const Handleedit=(task)=>{
    setedit(true)
    setFocus("task")
    setValue("task",task.task)
    seteditId(task.id)
    
  }
  const {theme}=useTheme()

  return (
    <>
      <div
        className={`card bg-base-100 shadow-xl ${
          task.length > 0 ? "transition-all duration-500 ease-out" : ""
        }`}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-body flex items-center justify-center">
            <h2 className="card-title" data-theme={theme}>TODO</h2>
            <div className="card-actions flex justify-self-auto ">
              <input
                
                type="text"
                placeholder="Enter your task..."
                className="w-full input input-bordered input-accent "
                {...register("task",{ required: true})}
              />
              <button
                className="btn btn-sm w-1/3 mx-auto btn-accent"
                type="submit"
              >
                {edit ? "Edit the task" : "Submit"}

              </button>
            </div>
            {task.length !== 0 && (
              <>
                <div className="divider">Your tasks</div>
                <div className="overflow-x-auto w-full">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Task</th>
                        <th>Delete</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {task.map((ele,id) => (
                        <><tr className="hover" key={ele.id}>
                          <th>
                            <label>
                              <input
                                type="checkbox"
                                className="checkbox checkbox-xs mx-auto"
                                checked={ele.status}
                                onChange={() => handleStatusChange(ele.id)}
                              />
                            </label>
                          </th>
                          <td>{ele.status ? <del>{ele.task}</del> : ele.task}</td>
                          <td><BsTrashFill className="mx-auto" onClick={()=>{Handledelete(ele.id)}}/></td>
                          <td><FiEdit className="mx-auto" onClick={()=>{Handleedit(ele)}}/></td>
                        </tr>
                        
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Todo;
