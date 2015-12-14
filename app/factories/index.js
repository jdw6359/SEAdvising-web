'use strict';

var app = require('angular').module('sea');

app.factory('AuthService',require('./auth'));
app.factory('StudentFactory', require('./student'));
app.factory('PasswordResetFactory', require('./password_reset'));