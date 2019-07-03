import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    constructor() {
        super();

        this.state = {
            currentActive: 'All'
        };

        this.buttons = [
            {
                filter: 'all',
                title: 'All'
            },
            {
                filter: 'active',
                title: 'Active'
            },
            {
                filter: 'done',
                title: 'Done'
            },
        ];
    }

    render() {
        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map((button) => {
            let className = button.filter === filter
                ? `btn btn-info`
                : `btn btn-outline-secondary`;

            return (
                <button
                    onClick={() => onFilterChange(button.filter)}
                    className={className}
                    type="button"
                    key={button.filter}>
                    {button.title}
                </button>
            )
        });

        return (
            <div className="item-status-filter btn-group">
                {buttons}
            </div>
        )
    }
}