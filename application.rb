require "sinatra"
require "haml"
require "nori"

before do
  @projects = Nori.new.parse(File.open("projects.xml", "rb").read)["projects"]["project"]
  @now = DateTime.now

end

get "/" do
  haml :index
end