require "sinatra"
require "haml"
require "nori"

get "/" do
  @projects = Nori.new.parse(File.open("projects.xml", "rb").read)
  puts @projects.inspect
  haml :index
end