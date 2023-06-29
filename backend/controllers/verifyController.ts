const verify = async (req: any, res: any) => {
    const username = req.body.username;
    const pw= req.body.password;
    
    if(username == process.env.USERNAME1){
        if(pw === process.env.PASSWORD1){
            res.send({
                verification: true
            })
        } else {
            res.send({
                verification: false
            })
        }
    } else if (username == process.env.USERNAME2){
        if(pw === process.env.PASSWORD2){
            res.send({
                verification: true
            })
        } else {
            res.send({
                verification: false
            })
        }
    } else{
        res.send({
            verification: false
        })
    }
}

module.exports = {
    verify
}