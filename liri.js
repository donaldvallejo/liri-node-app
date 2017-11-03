const doWhatItSaysFile = require('./commands/do-what-it-says.js')

const command = process.argv[2];
const commandValue = process.argv[3];

doWhatItSaysFile.executeCommand(command, commandValue);
