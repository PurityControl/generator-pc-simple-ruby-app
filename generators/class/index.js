var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);

    this.argument('project_name', {type: String, required: true});

    var class_case = function(str) {
      var firstLetter = str.charAt(0).toUpperCase();
      var rest = str.slice(1);
      return firstLetter + rest;
    }

    this.class_name = class_case(_.camelCase(this.project_name));
    this.file_name = _.snakeCase(this.project_name);
  },

  writing: {
    Testfile: function() {
      this.fs.copyTpl(
        this.templatePath('test/_new_class_test.rb'),
        this.destinationPath('test/' + this.file_name + '_test.rb'),
        {
          class_name: this.class_name,
          file_name: this.file_name
        });
    },
    Rubyfile: function() {
      this.fs.copyTpl(
        this.templatePath('lib/_new_class.rb'),
        this.destinationPath('lib/' + this.file_name + '.rb'),
       {
         class_name: this.class_name
       });
    }
  }
});
