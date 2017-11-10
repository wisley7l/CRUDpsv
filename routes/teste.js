var express = require('express');
var router = express.Router();
var Connection = require('tedious').Connection; 
var Request = require('tedious').Request; 
 
var config = { 
    userName: "{your database user name}", 
    password: "{your database password}", 
    server: "{you database server address}", 
    options: { 
        database: "{you database name}", 
        encrypt: true, 
    } 
}; 
 
var connection = new Tedious.Connection(config); 
connection.on("connect",function(err){ 
    var result = []; 
 
    var request = new Request("select * form student",function(err,count,rows){ 
        console.log(result); 
    }); 
    request.on("row", function (columns) { 
        var item = {}; 
        columns.forEach(function (column) { 
            item[column.metadata.colName] = column.value; 
        }); 
        result.push(item); 
    }); 
}) 