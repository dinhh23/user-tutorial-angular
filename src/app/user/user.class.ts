// Make sure variable names match backend from springboot

export class User {
    id: number = 0; 
    userName: string = "";
    passWord: string = "";
    firstName: string = "";
    lastName: string = "";
    phoneNumber: string = "";
    email: string = "";
    reviewer: boolean = false;
    admin: boolean = false;

    constructor() {

    }
}