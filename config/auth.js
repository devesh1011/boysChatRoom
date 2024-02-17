const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const LocalStrategy = require('passport-local').Strategy;
// const jwtStrategy = require("passport-jwt").Strategy;
const User = require("../models/User");
const bcrypt = require("bcrypt");

require("dotenv").config();

passport.use(new LocalStrategy({
    usernameField: 'username'
}, async (username, password, done) => {
    try {
        const user = await User.find({ username }).select("username password email")

        if (!user) {
            return done(null, false)
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return done(null, false)
        }

        return done(null, user);
    } catch (error) {
        console.log(error.message);
    }
}));

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://yourdomain:3000/auth/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));

// const jwtOptions = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: process.env.JWT_SECRET
// };

// passport.use(new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
//     try {
//         const user = await User.findById(jwtPayload.userId);

//         if (!user) {
//             return done(null, false);
//         }

//         return done(null, user);
//     } catch (error) {
//         return done(error);
//     }
// }));

passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser((user, done) => {
    done(null, user);
})