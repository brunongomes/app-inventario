export interface Users {
    id?: number
    name: string;
    email: string;
    login: string;
    type: string;
    password: string;
    confirmPassword?: string;
}

export interface IUsersResponse {
    status: string;
    msg: string;
}
