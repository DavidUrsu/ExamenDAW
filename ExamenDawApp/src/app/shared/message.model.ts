export class Message {
    id: number;
    text: string;
    createdAt: Date;

    constructor() {
        this.id = 0; // Initialize 'id' property
        this.text = ''; // Initialize 'text' property
        this.createdAt = new Date();
    }
}