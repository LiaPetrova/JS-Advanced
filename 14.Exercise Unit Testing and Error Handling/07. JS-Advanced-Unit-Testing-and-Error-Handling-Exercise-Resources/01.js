function solve(obj) {
    
    if (!obj.hasOwnProperty('method') || obj.method !== 'GET' && obj.method !== 'POST' && obj.method !== 'DELETE' && obj.method !== 'CONNECT') {
        throw Error("Invalid request header: Invalid Method");
    };

    let uriPattern = /^[\w\.]+$/g;
    if (!obj.hasOwnProperty('uri') || !obj.uri.match(uriPattern)) {
        throw Error("Invalid request header: Invalid URI");
    };

    if (!obj.hasOwnProperty('version') || obj.version !== 'HTTP/0.9' && obj.version !== 'HTTP/1.0' && obj.version !== 'HTTP/1.1' && obj.version !== 'HTTP/2.0') {
        throw Error("Invalid request header: Invalid Version");
    };

    let messagePattern = /^[^<>\\&'"]+$/g;
    if (!obj.hasOwnProperty('message') || obj.message !== '' && !obj.message.match(messagePattern)) {
        throw Error("Invalid request header: Invalid Message");
    };


    // Alternative solution from a college 
    // let validMethods = ["GET", "POST", "DELETE", "CONNECT"];

    // if(! (obj.method && validMethods.includes(obj.method))){
    //     throw new Error("Invalid request header: Invalid Method");
    // }

    // let uriRegex = /^[\w.]+$/;

    // if(! (obj.uri && ( uriRegex.test(obj.uri) || obj.uri == "*"))){
    //     throw new Error("Invalid request header: Invalid URI");
    // }

    // let validVerisons = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

    // if(! (obj.version && validVerisons.includes(obj.version))){
    //     throw new Error("Invalid request header: Invalid Version");
    // }

    // let messageRegex = /^[^<>\\&'"]*$/;

    // if(! ( obj.hasOwnProperty("message") && (messageRegex.test(obj.message) || obj.message == ""))) {
    //     throw new Error("Invalid request header: Invalid Message");
    // }


    return obj;
}
console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: '&'
}));
// console.log(solve({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// }));
// console.log(solve({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// }));