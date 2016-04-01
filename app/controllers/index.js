'use strict';

var app = require('angular').module('sea');

app.controller('ApplicationController', require('./application'));

require('./details');
require('./settings');

//route / page specific controllers
app.controller('AddNoteController', require('./add_note'));
app.controller('MainController', require('./main'));
app.controller('LoginController', require('./login'));
app.controller('EditLabelsController', require('./edit_labels'));
app.controller('EmailVerificationController', require('./email_verification'));
app.controller('PasswordResetController', require('./password_reset'))
app.controller('StudentListController', require('./student_list'));
app.controller('StudentController', require('./student'));
app.controller('StudentEditController', require('./student_edit'));
app.controller('StudentNewController', require('./student_new'));

//isolate controllers
app.controller('StudentSearchController', require('./student_search'));