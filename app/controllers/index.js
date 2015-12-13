'use strict';

var app = require('angular').module('sea');

app.controller('ApplicationController', require('./application'));
app.controller('MainController', require('./main'));
app.controller('LoginController', require('./login'));
app.controller('StudentListController', require('./student_list'));
app.controller('StudentController', require('./student'));