# simple-node-import



Basic usage:



### index.js



```javascript

const myDebug = require('./helpers/debugger');



myDebug.log("LETS DEBUG SOME SH!T");

```



Output:



```console



```







---







```javascript

const myDebug = require('./helpers/debugger');



myDebug.options.debug = true;



myDebug.log("LETS DEBUG SOME SH!T");

```



Output:



```console

LETS DEBUG SOME SH!T

```







---











```javascript

const myDebug = require('./helpers/debugger');



myDebug.options.debug = true;

myDebug.options.fullDebug = true;



myDebug.log("LETS DEBUG SOME SH!T");



```



Output:



```console

LETS DEBUG SOME SH!T {}

```



Now you can pass in Data to display as well:



```javascript

myDebug.options.fullDebug = true;



const hello = {

    name: "cooper",

    fail: true,

    avatar: "red-egg-head.png",

    skill_level: 1,

}



myDebug.log("LETS DEBUG SOME SH!T", hello);

```



Output:



```console

LETS DEBUG SOME SH!T {       

  name: 'cooper',

  fail: true,

  avatar: 'red-egg-head.png',

  skill_level: 1

}

```







You also can disable `fullDebug` to hide data after deep bug fixing. :heh:



```javscript

myDebug.options.fullDebug = false;



const hello = {

    name: "cooper",

    fail: true,

    avatar: "red-egg-head.png",

    skill_level: 1,

}



myDebug.log("LETS DEBUG SOME SH!T", hello);

```



Output:



```console

LETS DEBUG SOME SH!T

```







---







**This is not about the debbuger!**



This is a little example how you can import own-written modules the simple way.