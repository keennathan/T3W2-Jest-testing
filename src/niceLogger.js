function niceLogger(){
    console.log("Hello World!");
    return "Hello World.";
}

function sampleTest() {
    return "Heyy I'm a sample function.";
}

function messageRepeater(messageToRepeat){
    // message repeater functionality
    if (Array.isArray(messageToRepeat)){
        // sth
        return [...messageToRepeat, ...messageToRepeat, ...messageToRepeat];
    }
    else {
    let stringMessageToRepeat = messageToRepeat.toString();
    return stringMessageToRepeat + stringMessageToRepeat + stringMessageToRepeat;
}}

module.exports = {
    niceLogger,
    sampleTest,
    messageRepeater
}