import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './FinancePage.css';
import { deleteFin, addFin } from '../../reducers/FinanceSlice';
import CalendarComponent from '../CalendarComponent/CalendarComponent';

export default function FinancePage() {
    const finance = useSelector((state) => state.finance);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newFin, setNewFin] = useState({ name: "", status: null, money: "", date: "" });
    const [selectedStatus, setSelectedStatus] = useState(''); // Состояние для выбранной области

    const status = {
        false : '#ffdbdb',
        true : '#c2efcc'
    }

    const currentDate = new Date();
    const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const currentMonth = monthNames[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Прибавляем 1, так как месяцы в JavaScript начинаются с 0
        const year = date.getFullYear();
    
        // Добавляем ведущий ноль, если день или месяц состоят из одной цифры
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
    
        return `${formattedDay}.${formattedMonth}.${year}`;
    };

    const formatDateForInput = (dateString) => {
        const [day, month, year] = dateString.split('.');
        return `${year}-${month}-${day}`;
    };

    const handleDeleteFin = (finId) => {
        dispatch(deleteFin(finId));
    };

    const handleAddFin = () => {
        const newId = finance.length > 0 ? finance[finance.length - 1].id + 1 : 1;
        dispatch(addFin({ id: newId, ...newFin }));
        setNewFin({ name: "", status: null, money: '', date: "" }); // Очищаем поля после добавления задачи
        setIsModalOpen(false); // Закрываем модальное окно
    };

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const filteredFinance = selectedStatus ? finance.filter(fin => fin.status === selectedStatus) : finance;


    const financeForCalendar = () => {
        const finByDate = {};

        filteredFinance.forEach(fin => {

            const date = fin.date;
            if (!finByDate[date]) {
                finByDate[date] = [];
            }

            finByDate[date].push(
                <div style={{ backgroundColor: status[fin.status]}} key={fin.id} className='item'>
                    <span style={{ flex: 1 }}>{fin.name}</span>
                    <span>{fin.money} ₽</span>
                    <button onClick={() => handleDeleteFin(fin.id)}>х</button>
                </div>
            );

        });

        return finByDate;
    }

    return (
        <div className='container tasks'>
            <div className='buttons-tasks'>
                <button onClick={() => setIsModalOpen(true)}>Добавить доход/расход</button>
                <h1>{currentMonth}  ({currentYear}г)</h1>
                <select value={selectedStatus} onChange={handleStatusChange}>
                    <option value="">Все операции</option>
                        <option value={'false'}>Расход</option>
                        <option value={'true'}>Доход</option>
                </select>
            </div>
            <CalendarComponent key={'calendar-finance'} data={financeForCalendar()} />
            
            {isModalOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Добавить финансовую операцию</h2>
                        <label>
                            Название:
                            <input type='text' value={newFin.name} onChange={(e) => setNewFin({ ...newFin, name: e.target.value })} />
                        </label>
                        <label>
                            Доход/расход:
                            <select value={newFin.status} onChange={(e) => setNewFin({ ...newFin, status: e.target.value })}>
                                <option value="">Все операции</option>
                                <option value={false}>Расход</option>
                                <option value={true}>Доход</option>
                            </select>
                        </label>
                        <label>
                            Сумма:
                            <input type='text' value={newFin.money} onChange={(e) => setNewFin({ ...newFin, money: e.target.value })} />
                        </label>
                        <label>
                            Дата:
                            <input type='date' value={formatDateForInput(newFin.date)}  onChange={(e) => setNewFin({ ...newFin, date: formatDate(e.target.value) })} />
                        </label>
                        
                        <button onClick={handleAddFin}>Добавить</button>
                    </div>
                </div>
            )}
        </div>
    )

}
