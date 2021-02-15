function requestValidator(input) {

    if (!['GET', 'POST', 'DELETE', 'CONNECT'].includes(input.method) || input.method === undefined) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(input.version) || input.version === undefined) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (input.uri === undefined || !(/^([a-zA-z.])+/g.test(input.uri) || input.uri === '*')) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (/[<>\&\\'"]+/gm.test(input.message) || input.message === undefined) {
        throw new Error('Invalid request header: Invalid Message');

    }

    return input;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }));

// console.log(requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }));
