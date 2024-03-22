const NavBar = () => {
    return (
        <div className="w-1/5 px-4 py-10 rounded-lg shadow-lg border text-center border-neutral-700 bg-neutral-800">
             <p className="font-bold mb-4 text-2xl py-8 text-amber-400">My Tasks</p>
            <ul className="list-none">
                <li className="py-3"><a href="#today" className="text-amber-400 hover:text-amber-400 text-2xl p-8">Today</a>
                </li>
                <li className="py-3"><a href="#week" className="text-neutral-200 hover:text-amber-400 text-2xl p-8">This Week</a>
                </li>
                <li className="py-3"><a href="#all" className="text-neutral-200 hover:text-amber-400 text-2xl p-4">All Tasks</a>
                </li>
                <li className="py-3"><a href="#settings"
                        className="text-neutral-200 p-4 hover:text-amber-400 text-2xl">Settings</a></li>
            </ul>
            {/* Adjust image styling as needed */}
            <img src="./ToDoIcon1.png" alt="alternativeIcon" className="weight: 2.5vh height: 2.5vh mt-4 rounded-lg shadow" />
        </div>
    );
}

export default NavBar;
