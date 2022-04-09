class Resource {
    name: string;
    available: boolean;
    
    constructor(name, availability = true) {
        this.name = name;
        this.available = availability;
    }
}

export default Resource;