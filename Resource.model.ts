class Resource {
    name: string;
    available: boolean;
    
    constructor(name) {
        this.name = name;
        this.available = true;
    }
}

export default Resource;