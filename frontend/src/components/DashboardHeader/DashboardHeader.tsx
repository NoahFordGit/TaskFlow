import './DashboardHeader.css';

function DashboardHeader() {
    const hour = new Date().getHours();

    let greeting;

    if (hour < 5) {
        greeting = 'Up Late?';
    } else if (hour < 12) {
        greeting = 'Good Morning';
    } else if (hour < 18) {
        greeting = 'Good Afternoon';
    } else if (hour < 22) {
        greeting = 'Good Evening';
    } else {
        greeting = 'Up Late?';
    }

    return (
        <header className="dashboard-header">
            <div className="dashboard-header__content">
                <h1 className="dashboard-header__title">{greeting}</h1>
            </div>
            <p className="dashboard-header__subtitle">Here's what's happening with your tasks.</p>
        </header>
    );
}

export default DashboardHeader;