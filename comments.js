// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.
// The comments.html file should be served with the following content:
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Comments</title>
// </head>
// <body>
//     <h1>Comments</h1>
//     <ul>
//         <li>Comment 1</li>
//         <li>Comment 2</li>
//         <li>Comment 3</li>
//     </ul>
// </body>
// </html>
// The comments.html file should be served with the content type text/html.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.createReadStream('./comments.html').pipe(res);
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
