export class LukeGenerator {
    command: string;

    constructor() {
        this.command = "";
    }

    generate(_command: Array<any>): string {
        this.command = "";
        if (!_command) {
            throw new Error("Command Cannot be empty");
        }
        this.command = "*" + _command.length + "\r\n";
        for (let segment of _command) {
            this.command += "$" + segment.length + "\r\n" + segment + "\r\n";
        }
        return this.command;
    }
}


