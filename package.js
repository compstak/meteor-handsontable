Package.describe({
  name: 'compstak:handsontable',
  summary: 'Handsontable (CompStak modified version)',
  version: '0.26.1',
  git: 'https://github.com/compstak/meteor-handsontable.git'
});

Package.onUse(function(api) {

  if (api.versionsFrom) {
    api.versionsFrom('1.0.3');
  }

  api.use('jquery', 'client');

  api.addFiles('lib/handsontable/dist/handsontable.full.js','client', {bare:true}); // 'bare' means Meteor won't add another closure
  api.addFiles('lib/handsontable/dist/handsontable.full.css','client');
  api.addFiles('lib/export.js','client', {bare:true});

});

Package.onTest(function(api) {
  api.use('rajit:bootstrap3-datepicker');
  api.use('tinytest');
  api.use('robincwillis:handsontable');
  api.addFiles('robincwillis_handsontable-tests.js','client');
});
