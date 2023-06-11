export function validate(maxSymbol, setCallback) {
    return (val) => {
        setCallback(false);
        const errors = {};
        if (!val.login) {
            errors.login = 'No login';
        }
        if (!val.password) {
            errors.password = 'No password';
        }
        if (val.login.length > maxSymbol) {
            errors.login = `Login max ${maxSymbol} symbol`;
        }
        if (val.password.length > maxSymbol) {
            errors.password = `Password max ${maxSymbol} symbol`;
        }
        return errors
    }
}

export function validStatus(formik, st) {
    if (formik?.status?.errors) {
        return <div className={st.messag__errors}>{formik.status.errors}</div>
    }
}

export function validateMessag(maxSymbol, obj) {
    return (val) => {
        const errors = {};
        if (val[obj].length > maxSymbol) {
            errors[obj] = `Messag max ${maxSymbol} symbol`;
        }
        return errors
    }
}

export function validateUrl(maxSymbol){
    return (val) => {
        const errors = {};
        if (val?.aboutMe?.length > maxSymbol){
            errors.aboutMe = 'Max symbol is 100';
        }
        if (val.fullName.length > maxSymbol / 5) {
            errors.fullName = 'Max symbol is 20';
        }
        if (val.lookingForAJobDescription.length > maxSymbol) {
            errors.lookingForAJobDescription = 'Max symbol is 100';
        }
        const regExp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
        for (let i in val.contacts) {
            if (val.contacts[i]) {
                if (!regExp.test(val.contacts[i])) {
                    errors[i] = 'Not valid URL to ' + i;
                }
            }
        }
        return errors
    }
}
