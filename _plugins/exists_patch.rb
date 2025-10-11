# _plugins/exists_patch.rb
# Compatibility patch for Ruby 3.4 and older plugins using File.exists?

unless File.respond_to?(:exists?)
    class << File
        alias_method :exists?, :exist?
    end
end
