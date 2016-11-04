var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  writing: {
    Gemfile: function() {
      this.copy('_Gemfile', 'Gemfile');
    },
    Rakefile: function(){
      this.copy('_Rakefile', 'Rakefile');
    }
  }
});

