postboard-memory
================

In memory store for PostBoard

## Install

    npm install postboard-memory

## Express setup

    var express = require('express');
    var postboard = require('postboard-memory');
    
    var app = express();
    express.use(postboard());
    
    app.listen();

## Usage

HTTP POST data to URLs to save it.
HTTP GET to obtain the data at that URL.

