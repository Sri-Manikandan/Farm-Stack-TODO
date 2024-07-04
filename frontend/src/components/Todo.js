import axios from "axios";
import React from "react";

function TodoItem(props){
    const deleteTodoHandler = (title) => {
        axios.delete(`http://localhost:8000/api/todo/${title}`)
        .then((response) => {
            console.log(response.data);
            props.setStateFlag(!props.stateflag);
        })
    }
    return(
        <div>
            <p>
                <span style={{"fontWeight":"bold,underline"}}>{props.todo.title} - </span>{props.todo.description}
                <button onClick={() => deleteTodoHandler(props.todo.title)} className='btn btn-outline-danger mx-2 my-2' style={{"borderRadius":"50px",}}>X</button>
                <hr></hr>
            </p>
        </div>
    )
}

export default TodoItem;