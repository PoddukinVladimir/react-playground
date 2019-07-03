import React, {Component} from 'react';
import './add-item-form.css';

export default class AddItemForm extends Component {
    constructor() {
        super();

        this.state = {
            label: ''
        };

        this.onAdded = (e) => {
            e.preventDefault();
            if (!this.state.label) return;
            this.props.onAdded(this.state.label);
            this.clearLabel();
        };

        this.clearLabel = () => {
            this.setState({
                label: ''
            });
        };

        this.onLabelChange = (e) => {
            this.setState({
                label: e.target.value
            });
        }
    }

    render() {
        return (
            <form className="add-item-form text-center mt-3 d-flex"
                  onSubmit={this.onAdded}>
                <input type="text"
                       className="form-control"
                       value={this.state.label}
                       placeholder="What needs to be done"
                       onChange={this.onLabelChange}/>
                <button
                    className="btn btn-outline-secondary ml-1"
                    type="submit">
                    Add
                </button>
            </form>
        )
    }
}