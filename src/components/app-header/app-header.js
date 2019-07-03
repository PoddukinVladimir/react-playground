import React from 'react';

const AppHeader = ({ toDo, done }) => {
    return (
        <div className="row no-gutters justify-content-between align-items-baseline">
            <h1>Todo list</h1>
            <h5 className="text-secondary">{toDo} more to do, {done} done</h5>
        </div>

    );
};

export default AppHeader;