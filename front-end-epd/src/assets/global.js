export const currentAlert = {
    id: '',
    message: ''
}

export const AlertMessage = (id, message) => {
    currentAlert.id = id
    currentAlert.message = message

    window.dispatchEvent(Alert)
}

const Alert = new Event('Alert')