export class TodoItem {
    id: number;
    state: string;
    name: string;

    constructor(_id: number, _state: string, _name: string ) {
		this.id = _id;
		this.state = _state;
		this.name = _name;
	}
}
