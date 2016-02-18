'use strict';

var app = require('angular').module('sea');

app.directive('seaLabelDisplay', require('./label-display'));
app.directive('seaMessageBoard', require('./message-board'));
app.directive('seaStudentAction', require('./student-action'));
app.directive('seaStudentHeader', require('./student-header'));
app.directive('seaStudentNotes', require('./student-notes'));
app.directive('seaTransactionLog', require('./transaction-log'));