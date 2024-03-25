import { useState, useEffect } from 'react';

const Header = () => {
    const [todayDate, setTodayDate] = useState('');
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    useEffect(() => {
        // const today = new Date();
        // const options = { month: 'long', day: 'numeric' };
        // document.getElementById('date').textContent = today.toLocaleString('default', { month: 'long' }) + ' 2024';

        // // Setup for displaying week days and allowing selection to display specific day's to-dos
        // const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        // const weekDaysContainer = document.getElementById('week-days');

        // for (let i = 3; i >= - 3; i--) {
        //     let dayElement = document.createElement('button');
        //     const todaIsDay = new Date(Date.now() - i * 24 * 60 * 60 * 1000);

        //     let day = weekDays[todaIsDay.getDay()];
        //     let date = todaIsDay.getDate();
        //     console.log('first' + day + ' ' + date);

        //     let finelDate = day + ' ' + date;
        //     dayElement.textContent = finelDate;

        //     const todayDateforcheck = today.getDate();
        //     if (todayDateforcheck === date) {
        //         dayElement.className = 'hover:text-slate-100 text-slate-100 text-lg font-semibold py-1 px-9 border-b-2 border-b-amber-400';
        //     } else {
        //         dayElement.className = 'hover:text-slate-100 text-slate-400 text-lg font-semibold py-1 px-9 border-b border-b-slate-400';
        //     }

        //     dayElement.onclick = () => {
        //         alert('Displaying tasks for ' + day);
        //     }// Placeholder for actual functionality
        //     weekDaysContainer.appendChild(dayElement);

        // }

        const today = new Date();
        const options = { month: 'long', day: 'numeric' };
        setTodayDate(today.toLocaleDateString('en-US', options));
    }, []);

    return (
        <div>
            <div className="p-4 rounded-lg my-4" style={{ width: '100%' }}>
                <div className="flex justify-center my-4 text-lg">
                    <p className="text-2xl font-bold py-4 text-amber-400">This is our to-do list for this week.</p>
                </div>
                <div className="flex justify-center my-8">
                    <p className="bg-white px-8 py-4 font-extrabold rounded-3xl text-xl shadow">{todayDate}</p>
                </div>
                <div className="flex justify-equal justify-center mb-3 w-full" id="week-days">
                    {weekDays.map((day, index) => (
                        <button
                            key={index}
                            className="hover:text-slate-100 text-slate-400 text-lg font-semibold py-1 px-9 border-b border-b-slate-400"
                            onClick={() => alert('Displaying tasks for ' + day)}
                        >
                            {day}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;
