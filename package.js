Package.describe({
  name: 'compstak:handsontable',
  summary: 'Handsontable (CompStak modified version)',
  version: '0.19.0',
  git: 'https://github.com/compstak/meteor-handsontable.git'
});

Package.onUse(function(api) {

  if (api.versionsFrom) {
    api.versionsFrom('1.0.3');
  }

  api.use('jquery', 'client');

  api.addFiles('lib/export.js','client', {bare:true});
  api.addFiles('lib/handsontable/dist/handsontable.full.js','client', {bare:true}); // 'bare' means Meteor won't add another closure
  api.addFiles('lib/handsontable/dist/handsontable.full.css','client');
  api.export('Handsontable','client'); // Some people say client file with 'bare' doesn't need this, but it didn't work without it...



});

Package.onTest(function(api) {
  api.use('rajit:bootstrap3-datepicker');
  api.use('tinytest');
  api.use('robincwillis:handsontable');
  api.addFiles('robincwillis_handsontable-tests.js');
});
