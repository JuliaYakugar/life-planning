import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './TasksPage.css';
import { toggleTaskStatus, addTask, deleteTask } from '../../reducers/TasksSlice';
import CalendarComponent from '../CalendarComponent/CalendarComponent';

export default function TasksPage() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTask, setNewTask] = useState({ task: "", date: "", area: "" });
    const [selectedArea, setSelectedArea] = useState("");

    const areas = {
        'Быт' : '#ffdbdb',
        'Работа' : '#d2e2ff',
        'Саморазвитие' : '#d2ffdc',
        'Встречи' : '#dddddd'
    }

    const currentDate = new Date();
    const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const currentMonth = monthNames[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
    
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
    
        return `${formattedDay}.${formattedMonth}.${year}`;
    };

    const formatDateForInput = (dateString) => {
        const [day, month, year] = dateString.split('.');
        return `${year}-${month}-${day}`;
    };

    const handleToggleTaskStatus = (taskId) => {
        dispatch(toggleTaskStatus({ taskId }));
    };

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleAddTask = () => {
        const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
        dispatch(addTask({ id: newId, ...newTask, status: false }));
        setNewTask({ task: "", date: "", area: "" });
        setIsModalOpen(false);
    };

    const handleAreaChange = (event) => {
        setSelectedArea(event.target.value);
    };

    const filteredTasks = selectedArea ? tasks.filter(task => task.area === selectedArea) : tasks;

    const tasksForCalendar = () => {
        const tasksByDate = {};

        filteredTasks.forEach(task => {

            const date = task.date;
            if (!tasksByDate[date]) {
                tasksByDate[date] = [];
            }

            tasksByDate[date].push(
                <div style={{ backgroundColor: areas[task.area]}} key={task.id} className='item'>
                    <span 
                        style={{ flex: 1, textDecoration: !task.status ? 'none' : 'line-through' }}
                        onClick={() => handleToggleTaskStatus(task.id)}>{task.task}</span>
                    <button onClick={() => handleDeleteTask(task.id)}>х</button>
                </div>
            );

        });

        return tasksByDate;
    }

    return (
        <div className='container tasks'>
            <div className='buttons-tasks'>
                <button onClick={() => setIsModalOpen(true)}>Добавить задачу</button>
                <h1>{currentMonth}  ({currentYear}г)</h1>
                <select value={selectedArea} onChange={handleAreaChange}>
                    <option value="">Все задачи</option>
                    {Object.keys(areas).map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                    ))}
                </select>
            </div>
            <CalendarComponent key={'calendar-tasks'} data={tasksForCalendar()} />
            
            {isModalOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Добавить задачу</h2>
                        <label>
                            Задача:
                            <input type='text' value={newTask.task} onChange={(e) => setNewTask({ ...newTask, task: e.target.value })} />
                        </label>
                        <label>
                            Дата:
                            <input type='date' value={formatDateForInput(newTask.date)}  onChange={(e) => setNewTask({ ...newTask, date: formatDate(e.target.value) })} />
                        </label>
                        <label>
                            Категория:
                            <select value={newTask.area} onChange={(e) => setNewTask({ ...newTask, area: e.target.value })}>
                                <option value=''>Выберите категорию</option>
                                {Object.keys(areas).map((area, index) => (
                                    <option key={index} value={area}>{area}</option>
                                ))}
                            </select>
                        </label>
                        <button onClick={handleAddTask}>Добавить</button>
                    </div>
                </div>
            )}
        </div>
    )
    
}
