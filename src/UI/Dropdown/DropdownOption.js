import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class DropdownOption extends PureComponent {
    clickHandler = () => {
        this.props.selectedHandler(this.props.value);
    };

    render() {
        return (
            <div className="option" onClick={this.clickHandler}>{this.props.text}</div>
        );
    }
}

DropdownOption.propTypes = {
    value           : PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]).isRequired,
    text            : PropTypes.string.isRequired,
    selectedHandler : PropTypes.func.isRequired
};

export default DropdownOption;