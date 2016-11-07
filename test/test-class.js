'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('default', function(){
  before(function(done){
    // on smaller dev machines this setup takes longer than the default 2s.
    this.timeout(0);
    helpers.run(path.join(__dirname, '../generators/class'))
      .withArguments(['NewKlass'])
      .on('end', done);
  });

  it('creates files based on project name', function() {
    assert.file([
      'lib/new_klass.rb',
      'test/new_klass_test.rb'
    ]);
  });

  it('class matches the project name', function() {
    assert.fileContent('lib/new_klass.rb', /class NewKlass/);
  });

  it('test refers to the project name throught the file', function() {
    assert.fileContent('test/new_klass_test.rb',
                       /require 'new_klass'/);
    assert.fileContent('test/new_klass_test.rb',
                       /class TestNewKlass/);
    assert.fileContent('test/new_klass_test.rb',
                       /def test_new_klass_exists/);
    assert.fileContent('test/new_klass_test.rb',
                       /assert NewKlass.new/);
    assert.fileContent('test/new_klass_test.rb',
                       /create a NewKlass instance/);
  });
});
