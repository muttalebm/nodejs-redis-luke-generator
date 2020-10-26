module.exports={
    generate:(command)=>{
        let commands = command.split(" ");
        let actualCommand=`*${commands.length}\r\n`;
        for(let segment of commands){
            actualCommand+=`$${segment.length}\r\n${segment}\r\n`
        }
        return actualCommand
    }
}
