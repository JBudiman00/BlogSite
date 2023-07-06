const jwt = require('jsonwebtoken');
require('dotenv').config();
import config from '../config.json';
export {};

const login = async (req: any, res: any, next: any) => {
    const username = req.body.username;
    const password = req.body.password;
    if(username === process.env.ADMINUSER){
        if(password === process.env.PASSWORD){
            const token = jwt.sign({username: username}, process.env.JWTSECRET, { expiresIn: config.tokenLife });
            // const token = jwt.sign({username: username}, process.env.JWTSECRET);
            const refreshToken = jwt.sign({username: username}, process.env.REFRESHSECRET, { expiresIn: config.refreshTokenLife})
            // res.cookie('token', token, { httpOnly: true });
            // res.cookie('refreshToken', refreshToken, { httpOnly: true });
            res.cookie('token', token, { httpOnly: false, secure: false }); //FOR DEVELOMENT PURPOSES ONLY
            res.cookie('refreshToken', refreshToken, { httpOnly: false });  //FOR DEVELOMENT PURPOSES ONLY
            res.status(200).json({"status": "Logged in", token, refreshToken});
        } else {
            res.status(401).json({"status": "Couldn't log in"})
        }
    } else {
        res.status(401).json({"status": "Couldn't log in"})
    }
}

const refresh = async (req: any, res: any, next: any) => {
    try{
        const refreshToken = req.cookies.refreshToken;
        console.log(req.cookies);
        const { username } = jwt.verify(refreshToken, process.env.REFRESHSECRET);
        const accessToken = jwt.sign({username: username}, process.env.JWTSECRET, { expiresIn: config.refreshTokenLife });
        res.cookie('token', accessToken, { httpOnly: true });
        return res.status(201).json({"status": "Token Created"});
    } catch(err:any) {
        res.status(401).json({error: err})
    }
}

const verify = async (req: any, res: any, next: any) => {
    res.status(200).json();
}

module.exports = {
    login,
    refresh,
    verify
}