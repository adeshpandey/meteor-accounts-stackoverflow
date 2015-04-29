Package.describe({
  name: 'adeshpandey:accounts-stackoverflow',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Stack Overflow login API enables to login with stackoverflow like other services',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/adeshpandey/meteor-accounts-stackoverflow.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('adeshpandey:stackoverflow@0.0.1', ['client', 'server']);

  api.addFiles(['accounts_stackoverflow.css'], 'client');
  api.addFiles('stackoverflow_common.js', ['client', 'server']);
  api.addFiles('stackoverflow_server.js', 'server');
  api.addFiles('stackoverflow_client.js', 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('adeshpandey:accounts-stackoverflow');
  api.addFiles('accounts-stackoverflow-tests.js');
});
