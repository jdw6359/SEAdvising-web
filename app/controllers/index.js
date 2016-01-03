'use strict';

var app = require('angular').module('sea');

app.controller('ApplicationController', require('./application'));

//route / page specific controllers
app.controller('AuditNewController', require('./audit_new'));
app.controller('CopOutNewController', require('./cop_out_new'));
app.controller('MainController', require('./main'));
app.controller('LoginController', require('./login'));
app.controller('EmailVerificationController', require('./email_verification'));
app.controller('PasswordResetController', require('./password_reset'))
app.controller('StudentListController', require('./student_list'));
app.controller('StudentController', require('./student'));
app.controller('StudentNewController', require('./student_new'));

//isolate controllers
app.controller('CoopModalController', require('./coop_modal'));
app.controller('StudentSearchController', require('./student_search'));