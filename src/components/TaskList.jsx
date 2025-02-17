import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodo } from '../features/taskSlice'

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks)
    const loading = useSelector((state) => state.tasks.loading)
    const error = useSelector((state) => state.tasks.error)
    const dispatch = useDispatch();

    if(loading){
        return <p>Tasks loading ...</p>
    }
    if(error){
        return <p>There is an error {error}</p>
    }

    useEffect(() => {
        dispatch(fetchTodo)
    }, [])

  return (
    <div>
       <div>
        <h2>Tasks</h2>
        <ul>
            {tasks.map(task => (
                <li>
                    <div>
                        <p>{task.title}</p>
                        {task.description && <p>{task.description}</p>}
                        <p>Status: {task.status}</p>
                    </div>
                    <div>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                </li>
            ))}
        </ul>
       </div>
    </div>
  )
}

export default TaskList