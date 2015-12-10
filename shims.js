module.exports = {
    'angular': {
        'exports': 'angular',
        'depends': {
            'jquery': '$'
        }
    },
    'angular-ui-mask': {
        'depends': {
            'angular': 'angular'
        },
        'exports': 'angular.module("ui.mask").name'
    },
    'bootstrap': {
        'depends': {
          'jquery': 'jQuery'
        }
    },
    'jquery': {
      'exports': '$'
    },
    'rangy': {
      'exports': 'rangy'
    },
    'text-angular': {
        'depends': {
            'angular': 'angular',
            'rangy': 'rangy'
        },
        'exports': 'angular.module("textAngular").name'
    },
    'text-angular-sanitize': {
      'depends': {
        'angular': 'angular'
      }
    }
};
