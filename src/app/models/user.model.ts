export class User {
    constructor(
        public firstName: string,
        public lastName: string, 
        public email: string, 
        public drinkPreference: string, 
        public hobbies?: string[]

    ) {}

    //const user = new User('James', 'Smith', 'James@James.com', 'Jus d\'orange', ['footballe', 'lecture'])
}