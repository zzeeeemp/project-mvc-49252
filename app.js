const studentModule = require('./student');

const http = require('http');

const getStudentFullName = studentModule.getStudentFullName;
const getStudentId = studentModule.getStudentId;


const PORT = 3000;

const requestListener = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>About student</title>
    </head>
    <body>
      <p>My name is ${getStudentFullName()}. My student ID is ${getStudentId()}</p>
    </body>
    </html>
  `;

 res.end(htmlContent);
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});