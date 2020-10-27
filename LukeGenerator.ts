export class LukeGenerator {
    static generate(_command: Array<any>): string {
        let command = "";
        if (!_command) {
            throw new Error("Command Cannot be empty");
        }
        command = "*" + _command.length + "\r\n";
        for (let segment of _command) {
            command += "$" + segment.length + "\r\n" + segment + "\r\n";
        }
        return command;
    }
}


