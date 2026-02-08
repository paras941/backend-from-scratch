const http = require('http');
const server = http.createServer((req, res) => {
  const url = req.url;
  
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>Home</h1>
      <ul>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/children">Children</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    `);
  }
  
  else if (url === '/men') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Men Section</h1><a href="/">Back</a>');
  }


  else if (url === '/women') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Women Section</h1><a href="/">Back</a>');
  }

  
  else if (url === '/children') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Children Section</h1><a href="/">Back</a>');
  }


  else if (url === '/cart') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Your Cart</h1><a href="/">Back</a>');
  }

  
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
