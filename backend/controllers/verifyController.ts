const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config();
export {};

const login = async (req: any, res: any, next: any) => {
    passport.authenticate('local', {session: false}, (err: any, user: any, info: any) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user   : user
            });
        }
       req.login(user, {session: false}, (err: any) => {
           if (err) {
               res.send(err);
           }
           // generate a signed son web token with the contents of user object and return it in the response
           const token = jwt.sign(user, process.env.JWTSECRET);
           return res.json({user, token});
        });
    })(req, res);
}

module.exports = {
    login
}