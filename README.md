whatshappeningaroundyou
=======================

A little node application wich show what is happening around you on intagram.

You will need add some configuration in order to run it.

Create an app on instagram and add the client id and secret to your environment (.profile, .bash_profile, ...):
`export IG_CLIENT_ID=XXXXXXXXX`  
`export IG_CLIENT_SECRET=XXXXXXXXX`

The app is runnning on mongodb.
You will need to either create a database named "around_dev" on localhost or create an environment variable which indicate the url of your mongodb instance :
`export MONGOLAB_URI=mongodb://example.com/db_name`

Then run :
`npm install`  
`node app`


