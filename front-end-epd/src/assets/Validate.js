const reName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]*$/;
const reEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
const reCsn = /^\d+$/;
const reDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
const reImg = /^(https?:\/\/.*\.(?:png))/;




//image checker
export const checkImg = (img) => {
    if(img == null){
        img = ''
    }
    const error = img.length < 1 ? '' :
    (validateImg(img) ? '' : 'Not a correct link')
    return error;
};

export const validateImg = (img) => {
    if(img == null){
        return true
    }
    return reImg.test(img);
};

//name checker
export const checkFirstName = (firstname) => {
    const error = firstname.length == 0 ? 'Firstname cannot be empty' :
        firstname.length >= 20 ? 'Firstname is too long' : '';
    return error;
};

export const checkLastName = (lastname) => {
    const error = lastname.length == 0 ? 'Lastname cannot be empty' :
        lastname.length >= 20 ? 'Lastname is too long' : '';
    return error;
};



//date of birth checker
export const checkDateOfBirth = (dob) => {
    const error = dob.length == 0 ? 'DOB cannot be empty' :
        dob.length > 10 ? 'DOB is too long'
            : (validateDateOfBirth(dob) ? '' : 'example: (01/01/0001)')
    return error;
};

export const validateDateOfBirth = (dob) => {
    if(dob.length > 9){
        return reDate.test(dob);
    }
    else{
        return false
    }
};



//citizen service number checker
export const checkCitizenServiceNumber = (csn) => {
    const error = csn.length == 0 ? 'CSN cannot be empty' :
        csn.length > 9 ? 'CSN is too long'
            : (validateCitizenServieNumber(csn) ? '' : 'only allow numbers')
    return error;
};

export const validateCitizenServieNumber = (csn) => {
    return reCsn.test(csn);
};



//email checker
export const checkEmail = (email) => {
    if(email == null){
        email = ''
    }
    const error = email.length < 1 ? '' :
    (validateEmail(email) ? '' : email + ' is not an email.')
    return error;
};

export const validateEmail = (email) => {
    if(email == null){
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