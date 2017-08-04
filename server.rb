require 'sinatra'
require 'json'
require_relative 'models/thermostat.rb'

set :public_folder, proc { File.join(root) }

before do
  content_type 'application/json'
end

get '/' do
  headers 'Access-Control-Allow-Origin' => '*'
  { time: Time.now.to_s}.to_json
end

get '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
  @thermostat = Thermostat.instance
  { temperature: @thermostat.temp}.to_json
end

post '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
  @thermostat = Thermostat.create(params[:temp])
  p params
end
