apt-get update	
# updates the list of software our server knows about

apt-get install ruby-dev
# installs the tools we need for a ruby environment

apt-get install build-essential
# essential build tools such as GCC

apt-get install git
# what's going on with git right now?

###--- postgres database!
apt-get install postgresql
apt-get install postgresql-contrib

# create a user
sudo -u postgres createuser -s $USER
createdb $USER
touch ~/.psql_history
apt-get install libpq-dev
gem install pg

###--- gems!
gem install json -v 1.8.2
gem install bundler

## HOW DO WE GET AN APP ON HERE?

1. We need a Git repository!
	- Use HTTPS
	- https://github.com/ga-chicago/wedding-rsvp.git
2. We also need a working database!
	- Opening PSQL
	- Copy / run migrations + hit enter
	- Exit with \q
3. Change into the directory
4. BUNDLE
5. bundle exec rackup -p 80 --host 0.0.0.0
6. nohup bundle exec rackup -p 80 --host 0.0.0.0






