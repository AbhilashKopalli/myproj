const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const FacebookStrategy = require('passport-facebook').Strategy;
const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = passport => {

    passport.use(new FacebookStrategy(
        {
          clientID: "589094304929437",
          clientSecret: "1aa095b5be11fbdd01bb14b5a56bc91d",
          callbackURL: "http://localhost:3000/auth/facebook/callback",
          profileFields: ['id', 'displayName', 'photos', 'email'],
          passReqToCallback : true,
        },
        ( req, accessToken, refreshToken, profile, done ) => {
      let data = profile._json;
          Service.user.registerSocial(
            {
              provider: 'facebook',
              name: data.name,
              email: data.email,
              profile_picture: data.picture.data.url,
              meta: {
                provider: 'facebook',
                id: profile.id,
                token: accessToken,
              }
            },
            done
          );
        }
      ));
      let FacebookRoutes = {
      authenticate: () => {
          return passport.authenticate('facebook', { scope: ['email', 'public_profile', 'user_location'] });
        },
      callback: () => {
          return passport.authenticate('facebook', {
            failureRedirect: '/auth/failed'
          });
        }
      }



    
    passport.use(new JWTStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
            .then(user => {
                if(user) {
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => console.error(err));
    }));
}
