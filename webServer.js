//refrence node's built-in Http library to run a local web server

let http = require('http')

// use the http library to start a web server and listen for HTTP request events and send an HTTP response
    http.createServer((req, res) => {
        //write HTTP headers with a 200 OK Status code
        res.writeHead(200,{'Content-Type': 'text-plain'})
    res.write('Hello World - Our first node page')
        res.end()

    }        ).listen(3000);


