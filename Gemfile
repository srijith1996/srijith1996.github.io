# frozen_string_literal: true

source "https://rubygems.org"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", :platforms => [:mingw, :x64_mingw, :mswin]

gem "jekyll", "~> 4.3.3", group: :jekyll_plugins
gem "webrick"
gem "csv"
#gem "bigdecimal", group: :jekyll_plugins
#, "~> 3.2"

#gem "logger", group: :jekyll_plugins
#, "~> 1.7"

gem "jekyll-theme-minimal", group: :jekyll_plugins
#gem 'github-pages', group: :jekyll_plugins

gem "jekyll-scholar", "~> 7.2.1", group: :jekyll_plugins

gem "jekyll-include-cache", group: :jekyll_plugins

