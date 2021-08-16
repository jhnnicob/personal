const EmailReducer = (state, action) => {
    switch(action.type) {
        case "field":
            return {
                ...state,
                emailContent: {...state.emailContent, [action.name]: action.value}
            }
        case "send":
            return {
                ...state,
                isLoading: true,
            }
        case "success":
            return {
                ...state,
                success: true,
                successMessage: "Message sent",
                isLoading: false,
                emailContent: {
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                }
            }
        case "validate":
            let validations = action.validations;
            return {
                ...state,
                error: {...state.error, [action.name]: validations
                    .map((errorFor) => errorFor(action.value))
                    .filter((errorMsg) => errorMsg.length > 0)}
            }
        case "close_alert":
            return {
                ...state,
                successMessage: "",
            }
        default:
            return state;
    }
}

export default EmailReducer;