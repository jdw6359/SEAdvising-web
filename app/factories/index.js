'use strict';

var app = require('angular').module('sea');

app.factory('AuthService',require('./auth'));
app.factory('StudentFactory', require('./student'));