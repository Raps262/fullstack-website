const http = require('http');
const dbConfig = require('../server/models/modelUser');

dbConfig.connect((err)=> {
  if (err) {
    console.error(('Failed to connect to database', err.message));
  } else {
    console.log('Connected to database');
  }
});

const port = 5000;
const server = http.createServer((req, res)=> {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
});

server.listen(port, ()=> {
  console.log(`Server is running on http://localhost:${port}`);
});