// Create web server
// Load the express library
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;
const comments = require('./comments.json')