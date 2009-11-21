require "rubygems"
require "fileutils"

$BUILD_DIR = "_build"

task :build do
  FileUtils.mkdir($BUILD_DIR) if !File.exist?($BUILD_DIR)
  Dir.glob("*/").map { |dir| dir.chop }.each do |dir|
    if dir != $BUILD_DIR
      target = "#{$BUILD_DIR}/#{dir}.AdiumMessageStyle"
      FileUtils.remove_dir(target) if File.exist?(target)
      FileUtils.cp_r(dir, target)
    end
  end
  
end