const studentModule = require('./student');
const getStudentFullName = studentModule.getStudentFullName;
const getStudentId = studentModule.getStudentId;

console.log(`My name is ${getStudentFullName()}. My student ID is ${getStudentId()}`);