/*
 * This is the backend file for MISH/MASH, this will be the webpage that opens up the new tabs given by the user
 * through frontend. This file will be hosted on 127.0.0.1:1337/<8 character long random string>.
 * The 8 character ID that the page will be hosted on will be randomly generated by the backend and passed to this file.
 * This file will also only be available to access for 10 minutes (soon to be provided by the user).
 */
var http = require('http');	//requires
var io = require('socket.io')(1337);
var express = require('express.js');
var app = express();

function listenServer () {
	var id = makeId();
	app.get('/#'+id, function(req, res) {
		res.writeHead(200, {
            'content-type': 'text/plain'
        });
		res.end('Page Created.');
		console.log(id)
	});
}

function makeId()	//http://stackoverflow.com/a/1349426
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_-+=";

    for (var i=0; i<8; i++) {
    	text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}