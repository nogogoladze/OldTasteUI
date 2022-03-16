export class User {
    id: number;
    firstname: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    active: boolean
    token?: string;
}