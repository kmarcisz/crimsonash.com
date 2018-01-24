require 'sinatra'
require 'haml'
require 'nori'

before do
  nori = Nori.new(:parser => :rexml)
  @portfolioProjects = nori.parse(File.open('portfolio.xml', 'rb').read)['projects']['project']
  @hobbyProjects = nori.parse(File.open('hobbies.xml', 'rb').read)['projects']['project']
  @now = DateTime.now
end

get '/' do
  haml :index
end
