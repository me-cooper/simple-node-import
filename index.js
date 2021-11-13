const myDebug = require('./helpers/debugger');

myDebug.options.debug = false;
myDebug.options.fullDebug = false;




const hello = {
    name: "cooper",
    fail: true,
    avatar: "red-egg-head.png",
    skill_level: 1,
}





myDebug.log("LETS DEBUG SOME SH!T", hello);



