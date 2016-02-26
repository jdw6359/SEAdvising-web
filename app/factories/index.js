'use strict';

var app = require('angular').module('sea');

app.factory('AuthService', require('./auth'));
app.factory('AdvisorFactory', require('./advisor'));
app.factory('CoopFactory', require('./coop'));
app.factory('NoteFactory', require('./note'));
app.factory('PostFactory', require('./post'));
app.factory('StudentFactory', require('./student'));
app.factory('TransactionFactory', require('./transaction'));

app.factory('PasswordResetFactory', require('./password_reset'));