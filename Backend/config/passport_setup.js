const passport = require('passport')
const GoogleStrategie = require('passport-google-oauth')
const keys = require('./key')
passport.use(
	new GoogleStrategie({
		urlCallback : '/',
		clientId: keys.google.client,
		clientSecret : keys.google.clientSecret
	}, () => {
		
	})
)