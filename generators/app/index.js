var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);

    this.argument('project_name', {type: String, required: true});
  },

  writing: {
    Gemfile: function() {
      this.copy('_Gemfile', 'Gemfile');
    },
    Rakefile: function(){
      this.copy('_Rakefile', 'Rakefile');
    },
    Testfile: function() {
      this.copy('test/_new_project_test.rb', 'test/new_project_test.rb');
    },
    Rubyfile: function() {
      this.copy('lib/_new_project.rb', 'lib/new_project.rb');
    }
  }
});

