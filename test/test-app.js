'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');


describe('pc-simple-ruby-app', function(){
   describe('default', function(){
       before(function(done){
           helpers.run(path.join(__dirname, '../generators/app'))
                .on('end', done);
       });
       
       it('creates files', function(){
           assert.file([
               'Gemfile',
               'RakeFile'
           ]);
       });
   });
});
