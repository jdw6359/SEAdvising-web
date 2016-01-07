'use strict';

var app = require('angular').module('sea');

app.directive('seaStudentAction', require('./student-action'));
app.directive('seaTransactionLog', require('./transaction-log'));