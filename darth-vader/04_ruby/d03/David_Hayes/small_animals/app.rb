require 'bundler'
Bundler.require()


#JSON objects
def index_json
  {:name => 'David Hayes',
   :message => 'Homework about small animals'}.to_json
end

def kitten_json
  {:name => 'kitten',
   :cuteness => 9,
   :habitat => 'living room',
   :picture_url => 'http://www.bideawee.org/Media/Image/Brafton/It-s-kitten-season--Is-your-home-ready-for-the-arrival-of-your-new-pet-_16001188_800827146_0_0_14067751_500.jpg',
   :description => 'A baby cat, a feline.' }.to_json
end

def puppy_json
  {:name => 'puppy',
   :cuteness => 10,
   :habitat => 'back porch',
   :picture_url => 'http://mypetforumonline.com/wp-content/uploads/2014/09/8055895_orig.jpg',
   :description => 'A baby dog, a canine.' }.to_json
end

def bear_cub_json
  {:name => 'bear cub',
   :cuteness => 9,
   :habitat => 'forest',
   :picture_url => 'https://grizzlybearblog.files.wordpress.com/2010/08/grizzly_bear_cubs.jpg',
   :description => 'A baby bear. Do not touch.' }.to_json
end

def chick_json
  {:name => 'chick',
   :cuteness => 7,
   :habitat => 'barnyard',
   :picture_url => 'http://cdn.theanimalprintshop.com/images/D/Final_BabyChick_detail.jpg',
   :description => 'A baby KFC meal.' }.to_json
end

def lamb_json
  {:name => 'lamb',
   :cuteness => 8,
   :habitat => 'pasture',
   :picture_url => 'https://c1.staticflickr.com/5/4014/4578996705_9a7217a68d_z.jpg',
   :description => 'Woolite. Get it? Wool lite?' }.to_json
end

# Routes
get '/' do
  index_json
end

get '/json_test' do
  erb :json_test
end

get '/kitten' do
  kitten_json
end

get '/puppy' do
  puppy_json
end

get '/bear_cub' do
  bear_cub_json
end

get '/chick' do
  chick_json
end

get '/lamb' do
  lamb_json
end
