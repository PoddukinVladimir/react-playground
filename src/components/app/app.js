import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AddItemForm from '../add-item-form/add-item-form';

import './app.css';

export default class App extends Component {
    constructor() {
        super();

        function generateRandomId() {
            return Math.ceil(Math.random() * 1000000);
        }

        function createTodoItem(label) {
            return {
                label,
                important: false,
                id: generateRandomId()
            }
        }

        this.state = {
            todoData: [
                createTodoItem('Learn React'),
                createTodoItem('Build awesome app'),
                createTodoItem('Drink coffee')
            ],
            searchPredicate: '',
            filter: 'all' // active, all, done
        };

        this.deleteItem = (id) => {
            this.setState(({todoData}) => {
                return {
                    todoData: todoData.filter((item) => item.id !== id)
                }
            });
        };

        this.addItem = (label) => {
            let newItem = createTodoItem(label);

            this.setState(({todoData}) => {
                let newData = [
                    ...todoData,
                    newItem
                ];

                return {
                    todoData: newData
                }
            });
        };

        this.toggleProperty = (arr, id, propName) => {
            const idx = arr.findIndex((item) => item.id === id);

            const oldItem = arr[idx];
            const newItem = {
                ...oldItem,
                [propName]: !oldItem[propName]
            };

            return [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)
            ]
        };

        this.onToggleDone = (id) => {
            this.setState(({todoData}) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'done')
                }
            });
        };

        this.onToggleImportant = (id) => {
            this.setState(({todoData}) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'important')
                }
            });
        };

        this.onSearchChange = (searchPredicate) => {
            this.setState({
                searchPredicate
            });
        };

        this.search = (items, term) => {
            if (term === '') return items;

            return items.filter((item) =>
                item.label.toLocaleLowerCase().includes(
                    term.toLocaleLowerCase()
                )
            );
        };

        this.filter = (items, filter) => {
            switch (filter) {
                case 'all':
                    return items;
                case 'active':
                    return items.filter((item) => !item.done);
                case 'done':
                    return items.filter((item) => item.done);
                default:
                    return items;
            }
        };

        this.onFilterChange = (filter) => {
            this.setState({
                filter
            });
        };
    }

    render() {
        const {todoData, searchPredicate, filter} = this.state;

        const visibleData = this.filter(
            this.search(todoData, searchPredicate),
            filter
        );

        const todoCount = todoData.reduce((acc, currentVal) => {
            if (!currentVal.done) acc++;
            return acc;
        }, 0);

        const doneCount = todoData.length - todoCount;

        return (
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <AppHeader
                        toDo={todoCount}
                        done={doneCount}/>
                    <SearchPanel
                        filter={ filter }
                        onFilterChange={this.onFilterChange}
                        onSearchChange={ this.onSearchChange } />
                    <TodoList
                        items={visibleData}
                        onDeleted={ this.deleteItem }
                        onToggleImportant={ this.onToggleImportant }
                        onToggleDone={ this.onToggleDone }/>
                    <AddItemForm onAdded={ this.addItem }/>
                </div>
            </div>
        )
    }
}