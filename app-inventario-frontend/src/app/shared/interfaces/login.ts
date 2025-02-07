export interface ILogin {
    email: string;
    senha: string;
}

export interface ILoginResponse {
    status: string;
    token: string;
}
