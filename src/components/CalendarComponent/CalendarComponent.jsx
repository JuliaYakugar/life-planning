import React from 'react';
import './CalendarComponent.css';

export default function CalendarComponent({data}) {

    const daysOfWeek = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье'
    ];

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const startingDay = new Date(currentYear, currentMonth, 1).getDay() - 1;
    const daysOfMonth = [];

    for (let i = 0; i < startingDay; i++) {
        daysOfMonth.push('');
    }

    let i = 1;
    while (true) {
        const date = new Date(currentYear, currentMonth, i);
        
        if (date.getMonth() !== currentMonth) {
            break;
        }
        const formattedDate = date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
        daysOfMonth.push(formattedDate);
        i++;
    }

    const weeks = [];
    while (daysOfMonth.length > 0) {
        weeks.push(daysOfMonth.splice(0, 7));
    }

    if (weeks.some(week => week.some(day => day !== ''))) {
        const remainingDays = 7 - weeks[weeks.length - 1].length;
        for (let i = 0; i < remainingDays; i++) {
          weeks[weeks.length - 1].push('');
        }
    }

    const renderDataForDate = (date) => {
        if (data[date]) {
            return data[date].map((item) => item);
        }
        return null;
    };

    return (
        
        <table className='calendar'>
            <thead>
                <tr>
                {daysOfWeek.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {weeks.map((week, index) => (
                    <tr key={index}>
                        {week.map((day, index) => (
                            <td key={index}>
                                <p className='date'>{day}</p>
                                {renderDataForDate(day)}
                            </td>
                        ))}
                    </tr>
                    ))}
            </tbody>
        </table>
    )

}
