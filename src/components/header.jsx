import React, { useState, useEffect } from 'react';

const Header = () => {
    const [todayDate, setTodayDate] = useState('');
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    useEffect(() => {
        const today = new Date();
        const options = { month: 'long', day: 'numeric' };
        setTodayDate(today.toLocaleDateString('en-US', options));
    }, []);

    return (
        <div className="bg-yellow-200 p-4 rounded-lg shadow-lg border border-yellow-300 my-4" style={{ width: '100%' }}>
            <div className="flex justify-center my-4 text-lg">
                <p className="text-xl">This is our to-do list for this week.</p>
            </div>
            <div className="flex justify-center my-4">
                <p className="bg-white p-2 rounded shadow">{todayDate}</p>
            </div>
            <div className="flex justify-between" id="week-days">
                {weekDays.map((day, index) => (
                    <button
                        key={index}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-1 px-4 border border-blue-400 rounded shadow"
                        onClick={() => alert('Displaying tasks for ' + day)}
                    >
                        {day}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Header;
