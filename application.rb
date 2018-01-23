require 'sinatra'
require 'haml'
require 'nori'

before do
  @portfolioProjects = Nori.new.parse(File.open('portfolio.xml', 'rb').read)['projects']['project']
  @hobbyProjects = Nori.new.parse(File.open('hobbies.xml', 'rb').read)['projects']['project']
  puts @hobbyProjects
  @now = DateTime.now
end

get '/' do
  haml :index
end