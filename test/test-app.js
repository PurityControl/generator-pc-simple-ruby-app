'use strict';
var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;


describe('pc-simple-ruby-app', function(){
   describe('default', function(){
       before(function(done){
           helpers.run(path.join(__dirname, '../app'))
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
