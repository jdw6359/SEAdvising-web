'use strict'

var app = require('angular').module('sea');

app.controller('LabelsController', require('./labels'));
app.controller('LabelNewController', require('./label_new'));
app.controller('LabelEditController', require('./label_edit'));
