"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
require('dotenv').config();
passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, function (username, password, cb) {
    if (username == process.env.ADMINUSER) {
        if (password === process.env.PASSWORD) {
            return cb(null, username, { message: 'Logged In Successfully' });
        }
        else {
            return cb(null, false, { message: 'Incorrect username or password.' });
        }
    }
    else {
        return cb(null, false, { message: 'Incorrect username or password.' });
    }
}));
passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromExtractors([
        (req) => {
            let token = null;
            if (req && req.cookies) {
                token = req.cookies['token'];
            }
            return token;
        }
    ]),
    secretOrKey: process.env.JWTSECRET
}, function (jwtPayload, cb) {
    //This function doesn't do anything
    //Would be useful if I needed to extract specific information about individuals; but it's all the same settings and privledge for admins
    return cb(null, "admin");
}));
