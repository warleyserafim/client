import React from "react";
import AddTask from "./AddTask";
import TaskContainer from "./TasksContainer";
import Nav from "./Nav";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");

const Task = () => {
    return (
        <div>
            <Nav/>
            <AddTask socket={socket}/>
            <TaskContainer socket={socket}/>
        </div>
    )
}

export default Task;