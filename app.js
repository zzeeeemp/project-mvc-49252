const studentModule = require('./student');

const http = require('http');

const getStudentFullName = studentModule.getStudentFullName;
const getStudentId = studentModule.getStudentId;

const PORT = 3000;

const server = http.createServer((req, res) => {
 console.log(`Server is running on ${PORT}`);

  console.log(`My name is ${getStudentFullName()}. My student ID is ${getStudentId()}`);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Czesc, to jest latwy HTTP server\n');
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});