'use strict'

var app = require('angular').module('sea');

app.controller('AuditNewController', require('./audit_new'));

app.controller('CoopNewController', require('./coop_new'));
app.controller('CoopEditController', require('./coop_edit'));
app.controller('CopInNewController', require('./cop_in_new'));
app.controller('CopInEditController', require('./cop_in_edit'));
app.controller('CopOutNewController', require('./cop_out_new'));
app.controller('CopOutEditController', require('./cop_out_edit'));
app.controller('ProgramDetailNewController', require('./program_detail_new'));
app.controller('ProgramDetailEditController', require('./program_detail_edit'));
app.controller('SeniorProjectNewController', require('./senior_project_new'));
app.controller('SeniorProjectEditController', require('./senior_project_edit'));
