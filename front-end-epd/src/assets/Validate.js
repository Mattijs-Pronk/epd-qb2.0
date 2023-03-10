const reName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]*$/;
const reEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
const reCsn = /^\d+$/;
const reDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
const reImg = /^(https?:\/\/.*\.(?:png))/;



//borderColour changer
export const changeBorderColour = (error, field) => {
    const Border = document.getElementById(field)
    if (error) {
        Border.style.border = '1px solid #f44336'
    }
    else {
        Border.style.border = '1px solid var(--black)'
    }
}



//image checker
export const checkImg = (img) => {
    if (img == null) {
        img = ''
    }
    const error = img.length < 1 ? '' :
        (validateImg(img) ? '' : 'Not a correct link')

    changeBorderColour(error, 'img');

    return error;
};

export const validateImg = (img) => {
    if (img == null) {
        return true
    }
    return reImg.test(img);
};



//firstname checker
export const checkFirstName = (firstname) => {
    const error = firstname.length == 0 ? 'Firstname cannot be empty' :
        firstname.length >= 20 ? 'Firstname is too long'
            : (validateName(firstname) ? '' : 'letters only');

    changeBorderColour(error, 'firstname');

    return error;
};

export const validateName = (name) => {
    return reName.test(name);
};



//lastname checker
export const checkLastName = (lastname) => {
    const error = lastname.length == 0 ? 'Lastname cannot be empty' :
        lastname.length >= 22 ? 'Lastname is too long'
            : (validateName(lastname) ? '' : 'letters only');

    changeBorderColour(error, 'lastname');

    return error;
};



//date of birth checker
export const checkDateOfBirth = (dob) => {
    const error = dob.length > 10 ? 'DOB is too long'
        : (validateDateOfBirth(dob) ? '' : 'example: (01-01-0001)')

    changeBorderColour(error, 'dob');

    return error;
};

export const validateDateOfBirth = (dob) => {
    if (dob.length > 9) {
        return reDate.test(dob);
    }
    else {
        return false
    }
};



//citizen service number checker
export const checkCitizenServiceNumber = (csn) => {
    const error = csn.length == 0 ? 'CSN cannot be empty' :
        csn.length > 9 ? 'CSN is too long'
            : (validateCitizenServieNumber(csn) ? '' : 'numbers only')

    changeBorderColour(error, 'csn');

    return error;
};

export const validateCitizenServieNumber = (csn) => {
    return reCsn.test(csn);
};



//email checker
export const checkEmail = (email) => {
    if (email == null) {
        email = ''
    }
    const error = email.length < 1 ? '' :
        (validateEmail(email) ? '' : email + ' is not an email.')

    changeBorderColour(error, 'email');

    return error;
};

export const validateEmail = (email) => {
    if (email == null) {
        return true;
    }
    return reEmail.test(email);
};



//passwordchecker
export const checkPassword = (password) => {
    password.length < 6 ? 'Password is too short' : ''
    this.checkRePassword();
};

export const checkRePassword = (password, repassword) => {
    repassword.length == 0 ? 'Repassword cannot be empty' :
        password != repassword ? 'Password and RePassword do not match' : ''
};



//medicine,description checker
export const checkMedicineDescription = (medicinedescription) => {
    const error = medicinedescription.length > 800 ? 'Input text is to long (maximum of 800 characters)' : ''
    return error;
};



//history title checker
export const checkHistoryTitle = (title) => {
    const error = title.length == 0 ? 'Title cannot be empty' :
        title.length >= 42 ? 'Title is too long' : '';

    changeBorderColour(error, 'historytitle');

    return error;
};



//history description checker
export const checkHistoryDescription = (description) => {
    const error = description.length == 0 ? 'Description cannot be empty' :
        description.length >= 900 ? 'Description is too long' : '';

    changeBorderColour(error, 'historydescription');

    return error;
};