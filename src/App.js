import React, {useState} from "react"
import TodoItem from "./components/TodoItem";

function App() {

    const [tasks, setTasks] = useState([{
        id: Math.random(),
        title: "Grocery shopping",
        desc: "Make a list of needed items, select a store to visit, navigate the store to find the items on the list, check prices and compare brands, pay for the items at the checkout, and bring the items home and put them away."
    }]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    function removeTask(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleDescChange(event) {
        setDesc(event.target.value);
    }

    function addTask(event) {
        if (title === '' && desc === '') {
            event.preventDefault()
        } else if (title === '' && desc !== '') {
            let newTask = {
                id: Math.random(),
                title: "Untitled...",
                desc: desc
            }
            let newTasks = [newTask, ...tasks]
            setTasks(newTasks);
        } else if (title !== '' && desc === '') {
            let newTask = {
                id: Math.random(),
                title: title,
                desc: "No description..."
            }
            let newTasks = [newTask, ...tasks]
            setTasks(newTasks);
        } else if (title !== '' && desc !== '') {
            let newTask = {
                id: Math.random(),
                title: title,
                desc: desc
            }
            let newTasks = [newTask, ...tasks]
            setTasks(newTasks);
        }

        setTitle('');
        setDesc('');
        event.preventDefault()
    }

    return (
        <div className="App">
            <form className="form">
                <span style={{cursor: 'default'}}>task list</span>
                <div className="form__inner">
                    <div className="inputs">
                        <input
                            placeholder="Title..."
                            className="titleInput"
                            type="text"
                            onChange={handleTitleChange}
                            value={title}
                        />
                        <input
                            placeholder="Describe..."
                            className="descriptionInput"
                            type="text"
                            onChange={handleDescChange}
                            value={desc}
                        />
                    </div>
                    <button type="submit" className="addTaskBtn" onClick={addTask}>add task</button>
                </div>
            </form>
            <TodoItem
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
