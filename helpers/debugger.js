// These are simple values
// exported
var options = {
    debug: false,
    fullDebug: false,
}

// This is a function
// exported
const log = function (msg, obj = {}){
    if(options.debug){
        if(options.fullDebug){
            console.log(msg, obj);
        }else{
            console.log(msg);
        }
        
    }
}


// Here you publish 'options'-object and log-function
module.exports = {
    options,
    log    
};