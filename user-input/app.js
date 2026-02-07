const http = require('http');

const server = http.createServer((req, res) => {


  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>User Input</h1>
      <form method="POST" action="/submit">
        <input type="text" name="username" placeholder="Enter name" />
        <br><br>
        <input type="number" name="age" placeholder="Enter age" />
        <br><br>
        <button type="submit">Submit</button>
      </form>
    `);
  }

 
  else if (req.method === 'POST' && req.url === '/submit') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      
      const data = new URLSearchParams(body);
      const username = data.get('username');
      const age = data.get('age');

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <h1>Received Data</h1>
        <p>Name: ${username}</p>
        <p>Age: ${age}</p>
        <a href="/">Back</a>
      `);
    });
  }

  // 404
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
