import { toast } from 'react-toastify';

export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right'
    })
}

export const handleError = (msg) => {
    toast.error(msg, {
        position: 'top-right'
    })
}

export const handleErrorApI = (error) => {
    // Extract message from Axios error object
    if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message); // Display the error message from the server
    } else {
        toast.error("An unexpected error occurred!"); // Fallback error message
    }
};
export const handleSuccessApi = (message) => {
    // Extract message from Axios error object
    if (message.response && message.response.data && message.response.data.message) {
        toast.error(message.response.data.message);
    } else {
        toast.error("An unexpected error occurred!"); // Fallback error message
    }
};