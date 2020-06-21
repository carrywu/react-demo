const axios = require('axios');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3030;
let todoRes;
let error;
var request = require('request');
request('127.0.0.1:3030/api/todolist', function (e, res, body) {
    console.log(e,res,body)
});