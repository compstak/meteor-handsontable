Package.describe({
  name: 'robincwillis:handsontable',
  summary: 'Handsontable, forked to use bootstrap date picker',
  version: '0.12.5',
  git: 'https://github.com/robincwillis/meteor-handsontable.git'
});

Package.onUse(function(api) {
  if (api.versionsFrom) {
    api.versionsFrom('0.9.0');
  }
  api.use('jquery', 'client');
  api.addFiles([
    'lib/jquery.handsontable.full.js',
    'lib/jquery.handsontable.full.css'
  ],'client');
  api.export(['Handsontable'], 'client');
});

Package.onTest(function(api) {
  api.use('rajit:bootstrap3-datepicker');
  api.use('tinytest');
  api.use('robincwillis:handsontable');
  api.addFiles('robincwillis_handsontable-tests.js');
});
