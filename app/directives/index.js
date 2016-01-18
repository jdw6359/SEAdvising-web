'use strict';

var app = require('angular').module('sea');

app.directive('seaMessageBoard', require('./message-board'));
app.directive('seaStudentAction', require('./student-action'));
app.directive('seaStudentHeader', require('./student-header'));
app.directive('seaTransactionLog', require('./transaction-log'));