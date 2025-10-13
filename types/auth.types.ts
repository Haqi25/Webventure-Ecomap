

export interface LoginFormData {
    email : string,
    password : string,
    remember : boolean
}

export interface RegisterFormData {
    fullName : string,
    email : string,
    phone : string,
    password : string,
    confirmPassword : string,
    agree:boolean
}

export interface RequestResetData {
    email : string
}

export interface ResetPassword{
    password : string,
    confirmPassword : string
}