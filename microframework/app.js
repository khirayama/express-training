import http from 'http';

http.createServer((req, res) => {
  console.log(req.url, req.body);
  let url = req.url;
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello World' }));
  }
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
