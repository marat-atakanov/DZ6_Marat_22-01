import React from "react";

function TodoItem(props) {

    return (<div className='list'>
        <ol>
            {props.tasks.map((task) => (
                <ul className="list__item">
                    <div>
                        <p className="title">{task.title}</p>
                        <p className="description">{task.desc}</p>
                    </div>
                    <button className="deleteTaskBtn" onClick={() => props.removeTask(task.id)}>✖</button>
                </ul>))}
        </ol>
    </div>)
}

export default TodoItem;