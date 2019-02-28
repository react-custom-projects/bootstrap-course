import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import DropdownOption from "./DropdownOption";

import './Dropdown.css';

class Dropdown extends PureComponent {
    state = {
        isDropdownActive : false
    };

    dropdownElement = React.createRef();
    mounted         = true;

    toggleDropdown = () => {
        this.setState(state => {
            return {
                isDropdownActive : !state.isDropdownActive
            }
        })
    };

    handleOptionClick = value => {
        this.props.optionClickHandler(value);
        this.setState({
            isDropdownActive : false
        });
    };

    renderOptions = () => {
        return this.props.options.map((item, index) => {
            return <DropdownOption key={index} value={item.value} text={item.text} selectedHandler={this.handleOptionClick}/>
        });
    };

    renderSelectedValue = () => {
        let item = this.props.options.find(item => item.value === this.props.selectedValue);
        if (item) {
            return item.text;
        }
        return "Select a Value";
    };

    handleDocumentClick = e => {
        if (this.mounted) {
            if (!this.dropdownElement.current.contains(e.target)) {
                this.setState({
                    isDropdownActive : false
                });
            }
        }
    };

    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick);
        document.addEventListener('touchend', this.handleDocumentClick);
    }

    componentWillUnmount() {
        this.mounted = true;
        document.removeEventListener('click', this.handleDocumentClick);
        document.removeEventListener('touchend', this.handleDocumentClick);
    }

    render() {
        return (
            <div ref={this.dropdownElement} className={"dropdown " + (this.state.isDropdownActive ? 'active' : '')}>
                <div className="selected-value-wrapper" onClick={this.toggleDropdown}>
                    <p className="selected-value">{this.renderSelectedValue()}</p>
                    <div className="icon-wrapper">
                        <i className="fas fa-chevron-down icon-chevron-down">&nbsp;</i>
                    </div>
                </div>
                <div className="options-wrapper">
                    <div className="options-container">
                        {this.renderOptions()}
                    </div>
                </div>
            </div>
        );
    }
}

Dropdown.propTypes = {
    options            : PropTypes.arrayOf(
        PropTypes.shape({
            value : PropTypes.oneOfType([
                PropTypes.string.isRequired,
                PropTypes.number.isRequired,
            ]),
            text  : PropTypes.string.isRequired
        })
    ).isRequired,
    selectedValue      : PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
    optionClickHandler : PropTypes.func.isRequired
};

export default Dropdown;