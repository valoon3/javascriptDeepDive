const passport = require('passport');
const passportLocal = require('passport-local');

const localStrategy = passportLocal.strategy;

passport.use(new localStrategy(
    (username, password, done) => {
        User.findOne({ username: username}, (err, user) => {
            if(err) return done(err);
            if(!user) return done(null, false, { message: 'Incorrect username'});
            if(!user.validPassword(password)) return done(null, false, { message: 'Incorrect password'});
        })
        return done(null, user);
    }
))

