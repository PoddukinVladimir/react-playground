import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({
                      items,
                      onDeleted,
                      onToggleImportant,
                      onToggleDone
                  }) => {
    const elements = items.map((item) => {
        const {id, ...restItems} = item;

        return (
            <li
                className="list-group-item"
                key={ id }>
                <TodoListItem
                    { ...restItems }
                    onDeleted={ () => onDeleted(id) }
                    onToggleImportant={ () => onToggleImportant(id) }
                    onToggleDone={ () => onToggleDone(id) }/>
            </li>
        )
    });

    return (
        <ul className="list-group todo-list mt-3">
            {elements}
        </ul>
    )
};

export default TodoList;