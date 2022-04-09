class User {
    name: string;
    availability: boolean;

    constructor(name, availability = true) {
        this.name = name;
        this.availability = availability;
    }
}
export default User;