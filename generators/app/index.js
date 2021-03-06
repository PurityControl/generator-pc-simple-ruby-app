var generators = require('yeoman-generator');
var _ = require('lodash');
var case_helpers = require('../../lib/case-helpers');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);

    this.argument('project_name', {type: String, required: true});

    this.class_name = case_helpers.class_case(_.camelCase(this.project_name));
    this.file_name = _.snakeCase(this.project_name);
  },

  writing: {
    Gemfile: function() {
      this.copy('_Gemfile', 'Gemfile');
    },
    Rakefile: function(){
      this.copy('_Rakefile', 'Rakefile');
    },
    Testfile: function() {
      this.fs.copyTpl(
        this.templatePath('test/_new_project_test.rb'),
        this.destinationPath('test/' + this.file_name + '_test.rb'),
        {
          class_name: this.class_name,
          file_name: this.file_name
        });
    },
    Rubyfile: function() {
      this.fs.copyTpl(
        this.templatePath('lib/_new_project.rb'),
        this.destinationPath('lib/' + this.file_name + '.rb'),
       {
         class_name: this.class_name
       });
    }
  }
});
