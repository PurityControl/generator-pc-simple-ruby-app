'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var chai_assert = require('chai').assert;

describe('default', function(){
  before(function(done){
    // on smaller dev machines this setup takes longer than the default 2s.
    this.timeout(0);
    helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments(['ShinyProject'])
      .on('end', done);
  });

  it('creates boilerplate files', function(){
    assert.file([
      'Gemfile',
      'Rakefile'
    ]);
  });

  it('creates files based on project name', function() {
    assert.file([
      'lib/shiny_project.rb',
      'test/shiny_project_test.rb'
    ]);
  });

  it('class matches the project name', function() {
    assert.fileContent('lib/shiny_project.rb', /class ShinyProject/);
  });

  it('test refers to the project name throught the file', function() {
    assert.fileContent('test/shiny_project_test.rb',
                       /require 'shiny_project'/);
    assert.fileContent('test/shiny_project_test.rb',
                       /class TestShinyProject/);
    assert.fileContent('test/shiny_project_test.rb',
                       /def test_shiny_project_exists/);
    assert.fileContent('test/shiny_project_test.rb',
                       /assert ShinyProject.new/);
    assert.fileContent('test/shiny_project_test.rb',
                       /create a ShinyProject instance/);
  });
});
