export const checkValidity = (value, rules, inputIdentifier) => {
    const clonedOrderForm   = {
        ...this.state.orderForm
    };
    const clonedFormElement = {...clonedOrderForm[inputIdentifier]};

    let isValid = true;
    if (rules.required) {
        isValid                                      = value.trim() !== '' && isValid;
        clonedFormElement.displayErrors.showRequired = !(value.trim() !== '' && isValid);
        clonedOrderForm[inputIdentifier]             = clonedFormElement;
        this.setState({orderForm : clonedOrderForm});
    }

    if (rules.minLength) {
        isValid                                       = value.length >= rules.minLength && isValid;
        clonedFormElement.displayErrors.showMinLength = !(value.length >= rules.minLength && isValid);
        clonedOrderForm[inputIdentifier]              = clonedFormElement;
        this.setState({orderForm : clonedOrderForm});
    }

    if (rules.maxLength) {
        isValid                                       = value.length <= rules.minLength && isValid;
        clonedFormElement.displayErrors.showMaxLength = !(value.length <= rules.minLength && isValid);
        clonedOrderForm[inputIdentifier]              = clonedFormElement;
        this.setState({orderForm : clonedOrderForm});
    }

    return isValid;
};

// used to check if the given field is required
export const validateRequired = (inputValue) => {
    return inputValue.trim() === '';
};

// used to validate the minLength of the given field
export const validateMinLength = (inputValue, number) => {
    let isValid = false;
    if (inputValue.trim().length === 0) {
        isValid = false;
    } else
        if (inputValue.trim().length < number) {
            isValid = true;
        }
    return isValid;
};

// used to validate the maxLength of the given field
export const validateMaxLength = (inputValue, number) => {
    let isValid = false;
    if (inputValue.trim().length === 0) {
        isValid = false;
    } else
        if (inputValue.trim().length > number) {
            isValid = true;
        }
    return isValid;
};

// used to validate the Google Analytics ID
export const validateGoogleAnalytics = (inputValue) => {
    let isValid = false;
    if (inputValue.trim().length === 0) {
        isValid = false;
    } else
        if (!(/^ua-\d{4,9}-\d{1,4}$/i.test(inputValue.trim()))) {
            isValid = true;
        }
    return isValid;
};

// used to validate the given url
export const validateUrl = (inputValue) => {
    let isValid = false;
    if (inputValue.trim().length === 0) {
        isValid = false;
    } else
        if (!(/^(https?:\/\/)?(www.)[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(inputValue.trim()))) {
            isValid = true;
        }
    return isValid;
};

// used to validate instagram url
export const validateInstagramUrl = (inputValue) => {
    let isValid = false;
    if (inputValue.trim().length === 0) {
        isValid = false;
    } else
        if (!(/^(https?:\/\/)?(www.)instagram.com\/\w+(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(inputValue))) {
            isValid = true;
        }
    return isValid;
};

// used to validate facebook url
export const validateFacebookUrl = (inputValue) => {
    let isValid = false;
    if (inputValue.trim().length === 0) {
        isValid = false;
    } else
        if (!(/^(https?:\/\/)?(www.)facebook.com\/\w+(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(inputValue.trim()))) {
            isValid = true;
        }
    return isValid;
};

// used to validate snapchat url
export const validateSnapchatUrl = (inputValue) => {
    let isValid = false;
    if (inputValue.trim().length === 0) {
        isValid = false;
    } else
        if (!(/^(https?:\/\/)?(www.)snapchat.com\/\w+(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(inputValue.trim()))) {
            isValid = true;
        }
    return isValid;
};

// used to validate twitter url
export const validateTwitterUrl = (inputValue) => {
    let isValid = false;
    if (inputValue.trim().length === 0) {
        isValid = false;
    } else
        if (!(/^(https?:\/\/)?(www.)twitter.com\/\w+(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(inputValue.trim()))) {
            isValid = true;
        }
    return isValid;
};

// used to validate youtube url
export const validateYoutubeUrl = (inputValue) => {
    let isValid = false;
    if (inputValue.trim().length === 0) {
        isValid = false;
    } else
        if (!(/^(https?:\/\/)?(www.)youtube.com\/\w+(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(inputValue.trim()))) {
            isValid = true;
        }
    return isValid;
};

// used to validate the height and the width of file input type
// file => single image object
// imgWidth => is the required width
// imgHeight => is the required height
export const validateHeightWidth = (file, imgWidth, imgHeight) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            //Initiate the JavaScript Image object.
            let image = new Image();

            //Set the Base64 string return from FileReader as source.
            image.src = e.target.result;

            //Validate the File Height and Width.
            image.onload = function () {
                let height = this.height;
                let width  = this.width;
                (height >= imgHeight && width >= imgWidth) ? resolve(false) : resolve(true);
            };
        };
    })
};