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
        case "error":
            return {
                ...state,
                error: "Somthing went wrong",
                isLoading: false,
                emailContent: {
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                }
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