import './Sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__brand">
                <div className="sidebar__logo">TF</div>
                <h1>TaskFlow</h1>
            </div>

            <nav className="sidebar__nav" aria-label="Task sections">
                <button className="sidebar__button sidebar__button--active" type="button">All Tasks</button>
                <button className="sidebar__button" type="button">Today</button>
                <button className="sidebar__button" type="button">Upcoming</button>
                <button className="sidebar__button" type="button">Completed</button>
            </nav>
        </aside>
    );
}

export default Sidebar;