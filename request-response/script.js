const http = require('http');

const server = http.createServer((req, res) => {
  
  console.log('Method:', req.method);   
  console.log('URL:', req.url);         
  console.log('Headers:', req.headers);  

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('This is the response from server');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
