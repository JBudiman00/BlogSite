//passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
require('dotenv').config();
export {}

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, 
    function (username: any, password: any, cb: any) { 
        if(username == process.env.ADMINUSER){
            if(password === process.env.PASSWORD){
                return cb(null, username, {message: 'Logged In Successfully'});
            } else {
                return cb(null, false, {message: 'Incorrect username or password.'});
            }
        } else {
            return cb(null, false, {message: 'Incorrect username or password.'});
        }
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : process.env.JWTSECRET
    },
    function (jwtPayload: any, cb: any) {
        console.log("HERE");
        //This function doesn't do anything
        //Would be useful if I needed to extract specific information about individuals; but it's all the same settings and privledge for admins
        return cb(null, "admin");
    }
));