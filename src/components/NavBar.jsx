import React from 'react';

const NavBar = () => {
    return (
        <div className="w-1/5 px-4 py-10 rounded-lg shadow-lg border text-center border-neutral-700 bg-neutral-800">
            <p className="font-bold mb-4">My Tasks</p>
            <ul className="list-none">
                <li className="mb-2"><a href="#today" className="text-blue-800 hover:text-blue-600">Today</a></li>
                <li className="mb-2"><a href="#week" className="text-blue-800 hover:text-blue-600">This Week</a></li>
                <li className="mb-2"><a href="#all" className="text-blue-800 hover:text-blue-600">All Tasks</a></li>
                <li className="mb-2"><a href="#settings" className="text-blue-800 hover:text-blue-600">Settings</a></li>
            </ul>
            {/* Adjust image styling as needed */}
            <img src="./img/ToDoIcon1.png" alt="alternativeIcon" className="mt-4 rounded-lg shadow" style={{ width: '2.5vh', height: '2.5vh' }} />
        </div>
    );
}

export default NavBar;
