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
            return res.status(200).json({"status": "Logged in", token, refreshToken});
        } else {
            return res.status(401).json("Couldn't log in")
        }
    } else {
        return res.status(401).json("Couldn't log in")
    }
}

const refresh = async (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;
    try{
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const refreshToken = authHeader.substring(7); // Extract the token by removing 'Bearer ' prefix
            // Verify the refresh token and extract the user ID
            const { username } = jwt.verify(refreshToken, process.env.REFRESHSECRET);
            console.log(username);
            const accessToken = jwt.sign({username: username}, process.env.JWTSECRET, { expiresIn: process.env.EXPIREJWT });
            res.json({ accessToken });
        } else {
            res.status(401).json("unauthorized");
        }
    } catch(err:any) {
        res.status(401).json({error: err})
    }
}

module.exports = {
    login,
    refresh
}