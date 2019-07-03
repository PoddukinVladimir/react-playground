import React, {Component} from 'react';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import './search-panel.css';

export default class SearchPanel extends Component {
    constructor() {
        super();

        this.state = {
            searchPredicate: ''
        };

        this.onSearchChange = ({target}) => {
            const searchPredicate = target.value;
            this.setState({
                searchPredicate
            });
            this.props.onSearchChange(searchPredicate);
        }
    }

    render() {
        const searchText = 'Type here to search';

        const {searchPredicate} = this.state;
        const {filter, onFilterChange} = this.props;

        return (
            <div className="search-panel d-flex mt-3">
                <div className="search-panel-input mr-1">
                    <input
                        className="form-control"
                        onChange={this.onSearchChange}
                        placeholder={searchText}
                        value={searchPredicate}
                        type="text"/>
                </div>
                <ItemStatusFilter
                    onFilterChange={onFilterChange}
                    filter={filter} />
            </div>
        );
    }
}

