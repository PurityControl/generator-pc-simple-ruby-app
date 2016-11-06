require 'minitest/autorun'
require 'rake'

require '<%= file_name %>'

class Test<%= class_name %> < MiniTest::Unit::TestCase
  def setup
    #write setup stuff here
  end

  def teardown
    #write teardown stuff here
  end

  def test_<%= file_name %>_exists
    assert <%= class_name %>.new
      "Expected to be able to create a <%= class_name %> instance"
  end

  def test_write_more_tests
    flunk "You need to start writing your tests..."
  end
end
