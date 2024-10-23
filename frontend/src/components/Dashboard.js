import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const { data } = await axios.get('/api/tasks');
            setTasks(data);
        };
        fetchTasks();
    }, []);

    return (
        <div>
            <h1>Project Dashboard</h1>
            <div className="task-columns">
                {['To-do', 'In-progress', 'Done'].map((status) => (
                    <div key={status} className="task-column">
                        <h3>{status}</h3>
                        {tasks
                            .filter((task) => task.status === status)
                            .map((task) => (
                                <TaskCard key={task._id} task={task} />
                            ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;