import React from 'react';
type FormValuesType = {
    login?: string;
    password?: string;
    rememberMe?: boolean;
    responseCaptcha?: string;
};

export function validate(maxSymbol: number, setCallback: React.Dispatch<React.SetStateAction<boolean>>) {
    return (val: FormValuesType) => {
        setCallback(false);
        const errors: FormValuesType = {};
        if (!val.login) {
            errors.login = 'No login';
        } else if (val.login.length > maxSymbol) {
            errors.login = `Login max ${maxSymbol} symbol`;
        }
        if (!val.password) {
            errors.password = 'No password';
        } else if (val.password.length > maxSymbol) {
            errors.password = `Password max ${maxSymbol} symbol`;
        }
        return errors
    }
}

export function validStatus(formik: any, st: any) {
    if (formik?.status?.errors) {
        return <div className={st.messag__errors}>{formik.status.errors}</div>
    }
}

export function validateMessag(maxSymbol: number, obj: string) {
    return (val: { messag: string }) => {
        const errors = {};
        if (val[obj].length > maxSymbol) {
            errors[obj] = `Messag max ${maxSymbol} symbol`;
        }
        return errors
    }
}

type validateUrlType = {
    aboutMe?: string | null;
    fullName?: string | null;
    lookingForAJobDescription?: string | null;
    contacts?: any
};


export function validateUrl(maxSymbol: number) {
    return (val: validateUrlType) => {
        const errors: validateUrlType = {};
        if (val?.aboutMe?.length > maxSymbol) {
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
