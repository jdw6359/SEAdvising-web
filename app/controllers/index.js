'use strict';

var app = require('angular').module('sea');

app.controller('ApplicationController', require('./application'));
app.controller('AuditNewController', require('./audit_new'));
app.controller('MainController', require('./main'));
app.controller('LoginController', require('./login'));
app.controller('EmailVerificationController', require('./email_verification'));
app.controller('PasswordResetController', require('./password_reset'))
app.controller('StudentListController', require('./student_list'));
app.controller('StudentController', require('./student'));
app.controller('StudentNewController', require('./student_new'));

app.controller('CoopModalController', require('./coop_modal'));