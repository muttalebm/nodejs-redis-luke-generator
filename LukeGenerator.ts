export class LukeGenerator {
    command: string;

    constructor() {
        this.command = "";
    }

    generate(_command: string): string {
        this.command = "";
        let segments = _command.split(" ");
        this.command += "*" + segments.length + "\r\n";
        for (let segment of segments) {
            this.command += "$" + segment.length + "\r\n" + segment + "\r\n";
        }
        return this.command;
    }
}


