require "rubygems"
require "fileutils"

$BUILD_DIR = "_build"
$ARCHIVE_FILENAME = "modern-bubbling-{commit}"

def build
  FileUtils.mkdir($BUILD_DIR) if !File.exist?($BUILD_DIR)
  Dir.glob("*/").map { |dir| dir.chop }.each do |dir|
    if dir != $BUILD_DIR
      target = "#{$BUILD_DIR}/#{dir}.AdiumMessageStyle"
      FileUtils.remove_dir(target) if File.exist?(target)
      FileUtils.cp_r(dir, target)
      puts "Copied #{dir}/ to #{$BUILD_DIR}/#{dir}.AdiumMessageStyle"
    end
  end
end

def release
  build
  styles = Dir.glob("#{$BUILD_DIR}/*/").map { |dir| dir.chop }
  commit = get_commit_hash
  filename = $BUILD_DIR + "/" + $ARCHIVE_FILENAME.gsub("{commit}", commit) + ".tgz"
  cmd = "tar -C \"#{$BUILD_DIR}\" -czf \"#{filename}\""
  styles.each do |style|
    cmd << " \"#{style.split("/").last}\""
  end
  `#{cmd}`
  puts "Archived commit #{commit} to #{filename} with:"
  styles.each do |style|
    puts "\t#{style}"
  end
end

def get_commit_hash
  if File.exist?(".git/HEAD") && File.read(".git/HEAD") =~ /ref\: (.+)/i
    return File.read(".git/#{$1}")[0,6]
  else
    return "[unknown]"
  end
end


task :build do
  build
end

task :release do
  release
end