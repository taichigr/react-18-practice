import { memo, useDeferredValue } from "react";
import { Task } from "./Transition";

type Props = {
    taskList: Task[];
}

export const TaskLisk = memo(({taskList}: Props) => {
    const deferredTaskList = useDeferredValue(taskList);
    return (
        <>
            {deferredTaskList.map((task) => (
                <div key={task.id} style={{width: '300px', margin: 'auto', background: 'lavender' }}>
                    <p>title: {task.title}</p>
                    <p>assignee: {task.assignee}</p>
                </div>
            ))}
        </>
    )
})