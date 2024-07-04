import TodoItem from "./Todo";

function TodoList(props){
    return (
        <div>
            <ul>
                {props.todoviewList.map(todo => <TodoItem todo={todo} stateflag={props.stateflag} setStateFlag={props.setStateFlag}/>)}
            </ul>
        </div>
    )
}

export default TodoList;