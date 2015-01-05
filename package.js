Package.describe({
  name: 'robincwillis:handsontable',
  summary: 'Handsontable is a minimalistic approach to Excel-like table editor in HTML & jQuery, forked to use bootstrap date time picker',
  version: '0.12.3',
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
  api.use('tinytest');
  api.use('robincwillis:handsontable');
  api.addFiles('robincwillis_handsontable-tests.js');
});
