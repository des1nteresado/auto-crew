import express from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import router from './router';
import config from './config';

import './db';
import User from './db/models/user';

const app = express();

app.use(express.json());

app.use(config.API_PREFIX, router);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect', // figure out
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token: ', accessToken);
      // passport callback function
      // check if user already exists in our db with the given profile ID

      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          // if we already have a record with the given profile ID
          done(null, currentUser);
        } else {
          // if not, create a new user
          new User({
            googleId: profile.id,
          })
            .save()
            .then((newUser) => {
              done(null, newUser);
            });
        }
      });
    }
  )
);

app.use(
  cookieSession({
    // milliseconds of a day
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get('auth/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send(req.user);
  res.send('you reached the redirect URI');
});

app.get('/auth/logout', (req, res) => {
  req.logout();
  res.send(req.user);
});


app.listen(config.PORT, () => {
  console.log(`> Ready on http://localhost:${config.PORT}`);
});
