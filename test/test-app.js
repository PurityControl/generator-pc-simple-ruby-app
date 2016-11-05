'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');


describe('pc simple ruby app', function(){
  it('will barf without arguments');
     
  describe('default', function(){
    before(function(done){
      // on smaller dev machines this setup takes longer than the default 2s.
      this.timeout(0);
      helpers.run(path.join(__dirname, '../generators/app'))
        .withArguments(['ShinyProject'])
        .on('end', done);
    });

    it('creates files', function(){
      assert.file([
        'Gemfile',
        'Rakefile',
        'lib/new_project.rb',
        'test/new_project_test.rb'
      ]);
    });
  });
});
