import React, {Component} from 'react';
import Input from "../../UI/Input/Input";
import {bComponents} from "../../import-all-bootstrap-components";

import './ContactData.css';
import {validateRequired, validateMinLength} from "../../customValidators/customValidator";

class ContactData extends Component {
    state = {
        orderForm   : {
            name           : {
                elementType   : 'input',
                elementConfig : {
                    type        : 'text',
                    placeholder : 'Your Name'
                },
                value         : '',
                displayErrors : {
                    requiredError  : false,
                    minLengthError : false
                },
                valid         : false,
                touched       : false
            },
            deliveryMethod : {
                elementType   : 'select',
                elementConfig : {
                    options : [
                        {value : 'fastest', displayValue : 'Fastest'},
                        {value : 'cheapest', displayValue : 'Cheapest'}
                    ],
                },
                value         : 'cheapest',
                displayErrors : {},
                valid         : true
            }
        },
        formIsValid : false
    };

    componentDidMount() {
        const updatedOrderForm                        = {
            ...this.state.orderForm
        };
        updatedOrderForm.name.changeHandler           = this.nameHandler;
        updatedOrderForm.deliveryMethod.changeHandler = this.selectHandler;
        this.setState({orderForm : updatedOrderForm});
    }

    selectHandler = event => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };

        updatedOrderForm.deliveryMethod.value = event.target.value;
        this.checkFormValidity();
        this.setState({orderForm : updatedOrderForm});
    };

    nameHandler = (event) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };

        const nameInput       = updatedOrderForm.name;
        const nameInputErrors = nameInput.displayErrors;

        nameInput.value                = event.target.value;
        nameInputErrors.requiredError  = validateRequired(event.target.value);
        nameInputErrors.minLengthError = validateMinLength(event.target.value, 4);

        nameInput.valid = Object.values(nameInputErrors).every(el => {
            return el === false;
        });

        if (event.target.value.length > 0) {
            updatedOrderForm.name.touched = true
        }

        this.checkFormValidity();
        this.setState({orderForm : updatedOrderForm});
    };

    checkFormValidity = () => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        let formIsValid        = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({formIsValid : formIsValid});
    };

    render() {
        let formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id     : key,
                config : this.state.orderForm[key]
            })
        }
        return (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(el => (
                    <div key={el.id}>
                        <Input
                            elementType={el.config.elementType}
                            elementConfig={el.config.elementConfig}
                            value={el.config.value}
                            changed={(event) => el.config.changeHandler(event)}
                            invalid={!el.config.valid}
                            shouldValidate={el.config.displayErrors}
                            touched={el.config.touched}/>
                        {el.config.displayErrors.requiredError ? <p className="error-message">This field is required</p> : null}
                        {el.config.displayErrors.minLengthError ? <p className="error-message">The minimum length is 4</p> : null}
                    </div>
                ))}
                <bComponents.Button variant="primary"
                                    type="submit"
                                    disabled={!this.state.formIsValid}>Submit</bComponents.Button>
            </form>
        );
    }
}

export default ContactData;