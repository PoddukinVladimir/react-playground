import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    render() {
        const {
            label,
            done,
            important,
            onDeleted,
            onToggleImportant,
            onToggleDone
        } = this.props;

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ` important`
        }

        return (
            <div className="d-flex justify-content-between">
                <div className={ classNames }
                     onClick={ onToggleDone }>
                    <span className="todo-list-item-label">{ label }</span>
                </div>

                <div className="todo-list-item-actions">
                    <button className="btn btn-sm btn-outline-danger mr-1"
                            onClick={onDeleted}>
                        <i className="fa fa-trash fa-fw"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-success"
                            onClick={ onToggleImportant }>
                        <i className="fa fa-exclamation fa-fw"></i>
                    </button>
                </div>
            </div>
        );
    };
}